import React, { Fragment, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, deleteComment, downloadDocument, deleteDocument, updateCurrentTaskStatus, deleteTaskInfo } from '@actions';
import AttachmentCard from '@components/AttachmentCard';
import CustomButton from '@components/CustomButton';
import CustomSelect from '@components/CustomSelect';
import LoadingWidget from '@components/LoadingWidget';
import PostCommentView from '@components/PostCommentView';
import CustomToaster from '@components/CustomToaster';
import FileUpload from '@components/FileUpload';
import DeleteConfirmationPopup from '@components/DeleteConfirmationPopup';
import { isMobileView } from '@constants';
import FloatingChatWidget from '@components/FloatingChatWidget';
import { getNameInitialHelper, getFormattedTime, getFormattedDate, capitalizeFirstLetter } from '@helpers/utils';
import { container, taskStatus, discussionSection, memberCard, attachmentSection, checklistSection, messageSection } from './style.js';

const PriorityList = [
    {
        id: 1,
        val: 'High'
    },
    {
        id: 2,
        val: 'Medium'
    },
    {
        id: 0,
        val: 'Low'
    }
]

const TaskInfo = ({ taskDetail, refetchTaskDetail, refetchTaskList }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const agentInfo = useSelector(state => state.AGENT_STORE);
    const { agentProfile = {} } = agentInfo;
    const { agent_profile = {} } = agentProfile;
    const { full_name: agentName = '', agent } = agent_profile;

    const taskInfo = useSelector((store) => store.TASK_INFO);
    const { caseDetails={} } = taskInfo || {};
    const { user_details = {} } = caseDetails;
    const { first_name } = user_details;

    const [dataParams, setDataParams] = useState({
        ...taskDetail
    });
    const { title, priority_name, due_date, status_name, description, tasks_docs = [], check_list = {}, case: case_id } = dataParams || {};
    const [checkList, setCheckList] = useState('');
    const [loading, setLoading] = useState(false);
    const [showAddCheckList, setShowChecklist] = useState(false);
    const [priorityInfo, setPriorityInfo] = useState(() => {
        let selectedVal = PriorityList.filter(x => x.val == priority_name);
        if (selectedVal.length) {
            return selectedVal[0]
        }
        return PriorityList[0];
    });
    const [openUploadDocumentModal, setOpenUploadModal] = useState(false);
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const [showDeleteConfirmation, setDeleteConfirmation] = useState(false);
    const [selectedDeleteDocument, setDeleteDocument] = useState('');

    const setDataValues = (dataVal) => {
        setDataParams((val) => { return { ...val, ...dataVal } });
    }

    const handleBackBtnClick = () => {
        history.push(`/agent/tasks/${case_id}`);
    }

    const handlePriorityChange = (val) => {
        setPriorityInfo(val);
    }

    const addCheckList = () => {
        if (checkList) {
            let newCheckList = { ...check_list };
            newCheckList[checkList] = {
                action: false,
                updated_at: new Date()
            }
            setCheckList('');
            setDataValues({ check_list: newCheckList });
        } else {
            setToasterInfo({
                isVisible: true,
                isSuccess: false,
                isError: true,
                msg: 'Please add checklist items'
            })
            setTimeout(() => {
                hideToaster();
            }, 1000);
        }
    }

    const updateCheckList = (id, isDelete = false) => {
        let newCheckList = { ...check_list };
        if (isDelete) {
            delete newCheckList[id];
        } else {
            newCheckList[id] = { ...newCheckList[id], action: !newCheckList[id].action };
        }
        setDataValues({ check_list: newCheckList });
    }

    const checklistPercentage = useMemo(() => {
        let checked = 0;
        let totalItems = 0;
        Object.entries(check_list).map((val, key) => {
            if (val[1].action) {
                checked++;
            }
            totalItems++;
        })
        if (checked) {
            return parseInt((checked / totalItems) * 100);
        }
        return 0;
    }, [check_list]);

    const updateTaskDetils = () => {
        setLoading(true);
        let postDataParams = {
            task_id: dataParams.task_id,
            title: dataParams.title,
            description: dataParams.description,
            due_date: dataParams.due_date,
            check_list: dataParams.check_list,
            tags: '12',
            priority: priorityInfo.id
        }
        updateTask(postDataParams, dispatch, (resp, err) => {
            setLoading(false);
            updateTaskStatus(resp, err, 'Failed, Try again later', 'Task Updated successfully');
            if (!isMobileView()) {
                refetchTaskList();
            }
        })
    }

    const updateTaskStatus = (success, error, errorMsg = 'Failed, Try again later', msg = 'Comment Added Successfully') => {
        if (success) {
            setToasterInfo({
                isVisible: true,
                isSuccess: true,
                isError: false,
                msg: msg
            })
            setTimeout(() => {
                refetchTaskDetail();
            }, 1000);
        } else if (error) {
            setToasterInfo({
                isVisible: true,
                isSuccess: false,
                isError: true,
                msg: errorMsg
            })
        }
        setTimeout(() => {
            hideToaster();
        }, 1000);
    }

    const handleTaskStatusUpdate = (val) => {
        const postDataParams = {
            task_id: dataParams.task_id,
            status: val
        }
        updateCurrentTaskStatus(postDataParams, dispatch, (resp, err) => {
            setLoading(false);
            updateTaskStatus(resp, err, 'Failed, Try again later', 'Task Updated successfully');
            if (!isMobileView()) {
                refetchTaskList();
            }
        })
    }

    const deleteCommentClicked = (id) => {
        const postParams = {
            commentId: id
        }
        deleteComment(postParams, dispatch, (resp, err) => {
            if (resp) {
                refetchTaskDetail();
            }
        })
    }

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
        })
    }

    const uploadFile = (val, resp) => {
        toggleUploadModal();
        updateTaskStatus(resp, !resp, 'Failed, Please try again later', 'Document Uploaded Successfully');
    }

    const toggleUploadModal = () => {
        setOpenUploadModal(val => !val);
    }

    const deleteDocumentClicked = ({ id }) => {
        setDeleteDocument(id);
        toggleDeletePopup()
    }

    const deletePopupHandler = () => {
        toggleDeletePopup();
        setLoading(true);
        deleteDocument({ id: selectedDeleteDocument }, dispatch, (resp, err) => {
            setLoading(false);
            updateTaskStatus(resp, !resp, 'Failed, Please try again later', 'Deleted Successfully');
        })
    }

    const downloadImg = (data, contentType) => {
        let type = 'png';
        if (contentType) {
            type = contentType.split('/')[1];
        }
        const resp = `data:${contentType};base64, ${data}`;
        var link = document.createElement('a');
        console.log('link is', link);
        link.href = resp;
        link.download = `new.${type}`;
        link.click();
    }

    const downloadDocumentClicked = ({ id, docId }) => {
        setLoading(true);
        downloadDocument({ docId }, dispatch, (resp, err) => {
            setLoading(false);
            if (resp && resp.file_data) {
                let contentType = resp.content_type;

                downloadImg(resp.file_data, contentType);
            }
        })
    }

    const toggleDeletePopup = () => {
        setDeleteConfirmation(val => !val);
    }

    const deleteTask = () => {
        setLoading(true);
        deleteTaskInfo({ taskId: dataParams.task_id }, dispatch, (resp, err) => {
            setLoading(false);
            updateTaskStatus(resp, !resp, 'Failed, Please try again later', 'Deleted Successfully');
            if (isMobileView()) {
                handleBackBtnClick();
            } else if (refetchTaskList) {
                refetchTaskList();
            }
        })
    }

    const renderStatusOptions = (val)=>{
        if(val && ( val.includes('Progress') || val.includes('Review'))){
            return <Fragment>
                <span className="statusText" onClick={()=>handleTaskStatusUpdate(2)}>Mark as completed</span>
                <span className="statusText" onClick={()=>handleTaskStatusUpdate(0)}>Mark as In Progress</span>
            </Fragment>
        }
        return null;
    }

    let { fullYear, day, month } = getFormattedDate(due_date);
    let defaultDueDate =`${fullYear}-${month+1<=9?`0${month+1}`:month+1}-${day<=9?`0${day}`:day}`;

    const sortedComments = dataParams.tasks_comment.sort((a, b) => {
        try{
            let startD = new Date(a.created_at);
            let endD = new Date(b.created_at);
            return +endD - +startD;
        }catch(e){
            return false;
        }
    });

    return (
        <div className={container + " " + "innerTask agneTaskMobile"}>
            {
                loading && <div className="loadingScrn"><LoadingWidget /></div>
            }
            {
                openUploadDocumentModal ? <FileUpload maxWidth="600px" isUploadToServer fileUploadModalClosed={toggleUploadModal} uploadFile={uploadFile} task_id={dataParams && dataParams.task_id} /> : null
            }
            {
                showDeleteConfirmation ? <DeleteConfirmationPopup togglePopup={toggleDeletePopup} deletePopupHandler={deletePopupHandler} /> : null
            }
            <FloatingChatWidget caseId={case_id} currentUserId={agent} chatHeaderName={first_name}/>
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
            <div className="topTaskHead forAgent">
                <div className="taskName">
                    <img className="icon" src={ASSETS_BASE_URL + "/images/common/task.svg"} alt="task" />
                    <span className="tskMainHed">Task Name</span>
                    {/* <span className="status mobileView">{status_name}</span> */}
                    <span className="status ml-2">{status_name}</span>
                </div>
                <div className="statusCont">
                    {/* <span className="status">{status_name}</span> */}
                    {renderStatusOptions(status_name)}
                </div>

            </div>
            <div className="signDoc">
                <span className="backBtn" onClick={handleBackBtnClick}><i className="fa fa-arrow-left" aria-hidden="true"></i> Back</span>

            </div>
            <div className="signDoc">
                <input type="text" value={title} onChange={(e) => setDataValues({ title: e.target.value })}/>
                {/* <span className="sign">{title}</span> */}
                {/* <span className="backBtn" onClick={handleBackBtnClick}><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</span> */}
            </div>
            {/* <div className="taskStatus">Mark as completed</div> */}
            <div className="taskScrollSection">
                <div className={taskStatus + " " + "taskStatusNew"}>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/member.svg"} alt="home" />
                            <span>Members</span>
                        </div>
                        <div className="member">
                            <span>{agentName.split('')[0]}</span>
                            {/* <span className={memberCard({val: 1, bgcolor: '#C1E0B6'})}>M</span>
                        <span className={memberCard({val: 2, bgcolor: '#B8D4D6'})}>C</span> */}
                        </div>
                    </div>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/chevron.svg"} alt="home" />
                            <span className="hideMobile">Select</span><span>Priority</span>
                        </div>
                        {/* <span className="status">

                    </span> */}
                        <CustomSelect options={PriorityList} defaultOption={priorityInfo} clickHandler={handlePriorityChange} />
                    </div>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/blueCalendar.svg"} alt="home" />
                            <span className="hideMobile">Select</span><span>Due Date</span>
                        </div>
                        <input className="taskInputBlock" type="date" id="dueDate" name="dueDate" defaultValue={defaultDueDate} onChange={(e) => setDataValues({ due_date: new Date(e.target.value) })} />
                    </div>
                </div>
                <div className={discussionSection + " " + "discussionSectionNew"}>
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL + "/images/common/description.svg"} alt="discuss" />
                        <span>Description</span>
                    </div>
                    <span className="discussionTxt">
                        <textarea cols="50" rows="10" value={description} onChange={(e) => setDataValues({ description: e.target.value })}></textarea>
                    </span>
                </div>
                <div className={attachmentSection + " " + "attachmentSection"}>
                    <div className="attachmentHeader">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/attachment.svg"} alt="discuss" />
                            <span>Attachments</span>
                        </div>
                        <div className="taskName addAttachment">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/addIcon.svg"} alt="attachment" />
                            <span onClick={toggleUploadModal}>Add an attachment</span>
                        </div>
                    </div>
                    <div className="attachmentList">
                        {
                            tasks_docs.map((val) => {
                                return <AttachmentCard data={val} key={val.id} deleteDocumentClicked={deleteDocumentClicked} downloadDocumentClicked={downloadDocumentClicked} />
                            })
                        }
                    </div>
                </div>

                <div className={checklistSection({ progress: `${checklistPercentage}%` })}>
                    <div className="checklist">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/checklist.svg"} alt="discuss" />
                            <span>Checklist</span>
                        </div>
                        {
                            !showAddCheckList && <CustomButton text="Add an item" clickHandler={() => setShowChecklist(true)} margin="0px" padding="9px" borderRadius="5px" />
                        }
                    </div>
                    <div className="progress">
                        <span className="progressNo">{checklistPercentage}</span>
                        <span className="percent"></span>
                    </div>
                    <div className="checklistItems">
                        {
                            Object.entries(check_list).map((val, key) => {
                                const checked = val[1].action;
                                const icon = checked ? `${ASSETS_BASE_URL}/images/common/checkedTicker.svg` : `${ASSETS_BASE_URL}/images/common/emptyTicker.svg`;
                                return <div className={`item ${checked ? 'checkedItem' : ''}`} key={key}>
                                    <div className="checkItem" onClick={() => updateCheckList(val[0])}>
                                        <img src={icon} alt="discuss" />
                                        <span className="checkedText">{val[0]}</span>
                                    </div>
                                    <img src={`${ASSETS_BASE_URL}/images/common/delete.svg`} className="deleteIcon" onClick={() => updateCheckList(val[0], true)} />
                                </div>
                            })
                        }
                        {
                            showAddCheckList ?
                                <Fragment>
                                    <input type="text" placeholder="Add an item" value={checkList} onChange={(e) => setCheckList(e.target.value)} />
                                    <div className="checklistCta">
                                        <CustomButton text="Add" clickHandler={addCheckList} margin="0px 8px 0px 0px" padding="9px" borderRadius="5px" backgroundColor="#747BB4" />
                                        <CustomButton text="Cancel" clickHandler={() => {
                                            setCheckList('');
                                            setShowChecklist(false);
                                        }} margin="0px" padding="9px" borderRadius="5px" backgroundColor="#FE9874" />
                                    </div>
                                </Fragment>
                                : null
                        }
                    </div>
                </div>



                <div className={messageSection + " " + "messageSectionNew"}>
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL + "/images/common/message.svg"} alt="discuss" />
                        <span>Activity</span>
                    </div>
                    <div className="messageSection">
                        <PostCommentView taskId={dataParams.task_id} updateTaskStatus={updateTaskStatus} title={agentName} />
                        {
                            sortedComments.map((val, key) => {
                                const { user_details, msg, created_at, id } = val;
                                return <div className="msgView" key={key}>
                                    <span className="profile">{getNameInitialHelper(user_details.user_name||agentName)}</span>
                                    <div className="commentSection">
                                        <div className="info">
                                            <span className="name">{capitalizeFirstLetter(user_details.user_name||agentName)}</span>
                                            <span className="time">{`${getFormattedTime(created_at)}, ${getFormattedDate(created_at).formattedDate}`}</span>
                                        </div>
                                        <div className="msgSection">
                                            <div className="msg">{msg}</div>
                                            <img src={`${ASSETS_BASE_URL}/images/common/delete.svg`} className="deleteIcon" onClick={() => deleteCommentClicked(id)} />
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
            <div className="deleteTask customEditFor">
                <CustomButton text="Delete" clickHandler={deleteTask} margin="0px 0px 8px 0px" padding="10px 50px" borderRadius="5px" backgroundColor="#CF3030" />
                <div className="submitCta">
                    <CustomButton text="Update" clickHandler={updateTaskDetils} margin="0px 8px 0px 0px" padding="10px 30px" borderRadius="5px" backgroundColor="#747BB4" />
                    <CustomButton text="Cancel" clickHandler={handleBackBtnClick} margin="0px" padding="10px 30px" borderRadius="5px" backgroundColor="#FE9874" />
                </div>
            </div>
        </div >
    )
}

export default TaskInfo;