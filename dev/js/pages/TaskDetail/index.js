import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AttachmentCard from '@components/AttachmentCard';
import { SET_MENUBAR_STATE } from '@constants/types';
import { getTaskDetail, downloadDocument, deleteDocument, deleteComment, updateCurrentTaskStatus } from '@actions';
import PostCommentView from '@components/PostCommentView';
import CustomToaster from '@components/CustomToaster';
import FileUpload from '@components/FileUpload';
import { loaderView, isMobileView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import DeleteConfirmationPopup from '@components/DeleteConfirmationPopup';
import { getNameInitialHelper, getFormattedTime, getFormattedDate, capitalizeFirstLetter } from '@helpers/utils';
import { container, taskStatus, discussionSection, memberCard, attachmentSection, checklistSection, messageSection } from './style.js';

const TaskDetail = ({ activeTask, refetchTaskList=()=>{} })=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { taskDetail={} } = taskInfo||{};
    const [openUploadDocumentModal, setOpenUploadModal] = useState(false);
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const [showDeleteConfirmation, setDeleteConfirmation] = useState(false);
    const [selectedDeleteDocument, setDeleteDocument] = useState('');

    const handleBackBtnClick = ()=>{
        dispatch(
            {
                type: SET_MENUBAR_STATE,
                payload: {
                    activeWidget: 'tasks'
                }
            }
        )
       history.push('/dashboard');
    }

    useEffect(()=>{
        if(activeTask){
            if(!(taskDetail && taskDetail[activeTask])){
                getTaskDetail({taskId: activeTask}, dispatch);
            }
        }

    },[activeTask, dispatch]);

    const updateTaskStatus = (success, error, errorMsg='Failed, Try again later', msg='Comment Added Successfully')=>{
        if(success){
            setToasterInfo({
                isVisible: true,
                isSuccess: true,
                isError: false,
                msg: msg
            })
            setTimeout(() => {
                getTaskDetail({taskId: activeTask}, dispatch);
            }, 1000);
        }else if(error){
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

    const hideToaster = ()=>{
        setToasterInfo({
            isVisible: false
        })
    }

    const uploadFile = (val, resp)=>{
        toggleUploadModal();
        updateTaskStatus(resp, !resp, 'Failed, Please try again later', 'Document Uploaded Successfully');
    }

    const toggleUploadModal = ()=>{
        setOpenUploadModal(val=>!val);
    }

    const deleteDocumentClicked = ({id})=>{
        setDeleteDocument(id);
        toggleDeletePopup()
    }

    const deletePopupHandler = ()=>{
        toggleDeletePopup();
        setLoading(true);
        deleteDocument({id: selectedDeleteDocument}, dispatch, (resp, err)=>{
            setLoading(false);
            updateTaskStatus(resp, !resp, 'Failed, Please try again later', 'Deleted Successfully');
        })
    }

    const downloadImg = (data, contentType)=>{
        let type='png';
        if(contentType){
            type = contentType.split('/')[1];
        }
        const resp = `data:${contentType};base64, ${data}`;
        var link=document.createElement('a');
        console.log('link is', link);
        link.href=resp;
        link.download=`new.${type}`;
        link.click();        
    }

    const downloadDocumentClicked = ({id, docId})=>{
        setLoading(true);
        downloadDocument({ docId }, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp && resp.file_data){
                let contentType = resp.content_type;
                
                downloadImg(resp.file_data, contentType);
            }
        })
    }

    const toggleDeletePopup = ()=>{
        setDeleteConfirmation(val=>!val);
    }

    const deleteCommentClicked = (id)=>{
        const postParams = {
            commentId: id
        }
        deleteComment(postParams, dispatch, (resp, err)=>{
            updateTaskStatus(resp, !resp, 'Failed, Please try again later', 'Deleted Successfully');
        })
    }

    const handleTaskStatusUpdate = ()=>{
        const postDataParams = {
            task_id: activeTask,
            status: 1
        }
        updateCurrentTaskStatus(postDataParams, dispatch, (resp, err)=>{
            setLoading(false);
            updateTaskStatus(resp, err, 'Failed, Try again later', 'Task Updated successfully');
            if(!isMobileView()){
                refetchTaskList();
            }
        })
    }

    const { title, priority_name, status_name='', description, tasks_comment=[], tasks_docs=[], check_list=[] } = taskDetail && taskDetail[activeTask] || {};

    return(
        <div className={container + ' ' + 'innerTask' }>
            {
                openUploadDocumentModal ?<FileUpload maxWidth="600px" isUploadToServer fileUploadModalClosed={toggleUploadModal} uploadFile={uploadFile} task_id={activeTask}/>:null
            }
            {
                showDeleteConfirmation?<DeleteConfirmationPopup togglePopup={toggleDeletePopup} deletePopupHandler={deletePopupHandler}/>:null
            }
            {
                loading && <div className={loaderView}><LoadingWidget/></div>
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
            <div className="statusCont">
                {
                    status_name && status_name.toLowerCase().includes('pending')?<span className="statusText" onClick={handleTaskStatusUpdate}>Submit for review</span>:null
                }
                {/* <span className="status">{status_name}</span> */}
            </div>
            <div className="taskName">
                <img className="icon" src={ASSETS_BASE_URL+"/images/common/task.svg"} alt="task"/>
                <span>Task Name</span>
                <span className="status mobileView">{status_name}</span>
            </div>
            <div className="signDoc">
                <span className="sign">{title}</span>
                <span className="backBtn" onClick={handleBackBtnClick}>Back</span>
            </div>
            <div className={taskStatus}>
                <div className="view">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/member.svg"} alt="home"/>
                        <span>Members</span>
                    </div>
                    <div className="member">
                        <span>S</span>
                        <span className={memberCard({val: 1, bgcolor: '#C1E0B6'})}>M</span>
                        <span className={memberCard({val: 2, bgcolor: '#B8D4D6'})}>C</span>
                    </div>
                </div>
                <div className="view">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/chevron.svg"} alt="home"/>
                        <span>Priority</span>
                    </div>
                    <span className="status">{priority_name}</span>
                </div>
                <div className="view">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/blueCalendar.svg"} alt="home"/>
                        <span>Due Date</span>
                    </div>
                    <span className="dueDate">29 Feb 2020</span>
                </div>
            </div>
            <div className={discussionSection}>
                <div className="taskName">
                    <img className="icon" src={ASSETS_BASE_URL+"/images/common/description.svg"} alt="discuss"/>
                    <span>Description</span>
                </div>
                <span className="discussionTxt">{description}</span>
            </div>
            <div className={attachmentSection}>
                <div className="attachmentHeader">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/attachment.svg"} alt="discuss"/>
                        <span>Attachments</span>
                    </div>
                    <div className="taskName addAttachment" onClick={toggleUploadModal}>
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/addIcon.svg"} alt="attachment"/>
                        <span>Add an attachment</span>
                    </div>
                </div>
                <div className="attachmentList">
                    {
                        tasks_docs.map((val, key)=>{
                            return <AttachmentCard data={val} key={key} deleteDocumentClicked={deleteDocumentClicked} downloadDocumentClicked={downloadDocumentClicked}/>
                        })
                    }
                </div>
            </div>
            
            <div className={checklistSection({progress: '60%'})}>
                <div className="taskName">
                    <img className="icon" src={ASSETS_BASE_URL+"/images/common/checklist.svg"} alt="discuss"/>
                    <span>Checklist</span>
                </div>
                <div className="progress">
                    <span className="progressNo">60%</span>
                    <span className="percent"></span>
                </div>
                <div className="checklistItems">
                    {
                        Object.entries(check_list).map((val, key)=>{
                            const checked = val[1];
                            const icon = checked?`${ASSETS_BASE_URL}/images/common/checkedTicker.svg`:`${ASSETS_BASE_URL}/images/common/emptyTicker.svg`;
                            return <div className={`item ${checked?'checkedItem':''}`} key={key}>
                                <img src={icon} alt="discuss"/>
                                <span className="checkedText">{val[0]}</span>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className={messageSection}>
                <div className="taskName">
                    <img className="icon" src={ASSETS_BASE_URL+"/images/common/message.svg"} alt="discuss"/>
                    <span>Activity</span>
                </div>
                <div className="messageSection">
                    <PostCommentView taskId={activeTask} updateTaskStatus={updateTaskStatus}/>
                    {/* <div className="msgView">
                        <span className="profile">SW</span>
                        <input type="text" placeholder="Write a Comment"/>
                    </div> */}
                    {
                        tasks_comment.map((val, key)=>{
                            const { user_details, user_name, msg, created_at, id } = val;
                            return <div className="msgView" key={key}>
                                <span className="profile">{getNameInitialHelper(user_details.user_name)}</span>
                                <div className="commentSection">
                                    <div className="info">
                                        <span className="name">{capitalizeFirstLetter(user_details.user_name)}</span>
                                        <span className="time">{`${getFormattedTime(created_at)}, ${getFormattedDate(created_at).formattedDate}`}</span> 
                                    </div>
                                    <div className="msgSection">
                                        <div className="msg">{msg}</div>
                                        <img src={`${ASSETS_BASE_URL}/images/common/delete.svg`} className="deleteIcon" onClick={()=>deleteCommentClicked(id)}/>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    
                </div>
            </div>
        </div>
    )

}

export default TaskDetail;