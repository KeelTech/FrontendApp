import React, { Fragment, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTask, deleteComment } from '@actions';
import AttachmentCard from '@components/AttachmentCard';
import CustomButton from '@components/CustomButton';
import CustomSelect from '@components/CustomSelect';
import LoadingWidget from '@components/LoadingWidget';
import PostCommentView from '@components/PostCommentView';
import CustomToaster from '@components/CustomToaster';
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

const TaskInfo = ({taskDetail, refetchTaskDetail})=>{
    const history = useHistory();
    const dispatch = useDispatch();

    const [dataParams, setDataParams] = useState({
        ...taskDetail
    });
    const { title, priority_name, due_date, status_name, description, tasks_docs=[], check_list={}, case_id } = dataParams || {};
    const [checkList, setCheckList] = useState('');
    const [loading, setLoading] = useState(false);
    const [showAddCheckList, setShowChecklist] = useState(false);
    const [priorityInfo, setPriorityInfo] = useState(()=>{
        let selectedVal = PriorityList.filter(x=>x.val==priority_name);
        if(selectedVal.length){
            return selectedVal[0]
        }
        return PriorityList[0];
    });

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    const setDataValues = (dataVal)=>{
        setDataParams((val)=>{ return {...val, ...dataVal} });
    }

    const handleBackBtnClick = ()=>{
       history.push(`/agent/tasks/${case_id}`);
    }

    const handlePriorityChange = (val)=>{
        setPriorityInfo(val);
    }

    const addCheckList = ()=>{
        if(checkList){
            let newCheckList = {...check_list};
            newCheckList[checkList] = {
                action: false,
                updated_at: new Date()
            }
            setCheckList('');
            setDataValues({check_list: newCheckList});
        }else{
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

    const updateCheckList = (id, isDelete=false) =>{
        let newCheckList = {...check_list};
        if(isDelete){
            delete newCheckList[id];
        }else{
            newCheckList[id] = {...newCheckList[id], action: !newCheckList[id].action};   
        }
        setDataValues({check_list: newCheckList});
    }

    const checklistPercentage = useMemo(()=>{
        let checked=0;
        let totalItems = 0;
        Object.entries(check_list).map((val, key)=>{
            if(val[1].action){
                checked++;
            }
            totalItems++;
        })
        if(checked){
            return parseInt((checked/totalItems)*100);
        }
        return 0;
    },[check_list]);

    const updateTaskDetils = ()=>{
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
        updateTask(postDataParams, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp){
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Task Updated successfully'
                });
                //handleBackBtnClick();
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed, Try again later'
                });
            }
            setTimeout(() => {
                hideToaster();
            }, 1000);
        })
    }

    const updateTaskStatus = (success, error, msg='')=>{
        if(success){
            refetchTaskDetail();
            setToasterInfo({
                isVisible: true,
                isSuccess: true,
                isError: false,
                msg: 'Comment Added Successfully'
            })
        }else if(error){
            setToasterInfo({
                isVisible: true,
                isSuccess: false,
                isError: true,
                msg: msg||'Failed, Try again later'
            })
        }
        setTimeout(() => {
            hideToaster();
        }, 1000);
    }

    const deleteCommentClicked = (id)=>{
        const postParams = {
            commentId: id
        }
        deleteComment(postParams, dispatch, (resp, err)=>{
            if(resp){
                refetchTaskDetail();
            }
        })
    }

    const hideToaster = ()=>{
        setToasterInfo({
            isVisible: false
        })
    }

    let { fullYear, day, month } = getFormattedDate(due_date);
    let defaultDueDate = `${fullYear}-${month<10?`0${month}`:month}-${day<10?`0${day}`:day}`;

    return(
        <div className={container}>
            {
                loading && <div className="loadingScrn"><LoadingWidget/></div>
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
            <div className="statusCont">
                <span className="statusText">Mark as completed</span>
                <span className="status">{status_name}</span>
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
            <div className="taskStatus">Mark as completed</div>
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
                        <span className="hideMobile">Select</span><span>Priority</span>
                    </div>
                    {/* <span className="status">

                    </span> */}
                    <CustomSelect options={PriorityList} defaultOption={priorityInfo} clickHandler={handlePriorityChange}/>
                </div>
                <div className="view">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/blueCalendar.svg"} alt="home"/>
                        <span className="hideMobile">Select</span><span>Due Date</span>
                    </div>
                    <input type="date" id="dueDate" name="dueDate" defaultValue={defaultDueDate} onChange={(e)=>setDataValues({due_date: new Date(e.target.value)})}/>
                </div>
            </div>
            <div className={discussionSection}>
                <div className="taskName">
                    <img className="icon" src={ASSETS_BASE_URL+"/images/common/description.svg"} alt="discuss"/>
                    <span>Description</span>
                </div>
                <span className="discussionTxt">
                    <textarea cols="50" rows="10" value={description} onChange={(e)=>setDataValues({description: e.target.value})}></textarea>
                </span>
            </div>
            <div className={attachmentSection}>
                <div className="attachmentHeader">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/attachment.svg"} alt="discuss"/>
                        <span>Attachments</span>
                    </div>
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/addIcon.svg"} alt="attachment"/>
                        <span>Add an attachment</span>
                    </div>
                </div>
                <div className="attachmentList">
                    {
                        tasks_docs.map((val)=>{
                            return <AttachmentCard data={val} key={val.doc_id}/>
                        })
                    }
                </div>
            </div>
            
            <div className={checklistSection({progress: `${checklistPercentage}%`})}>
                <div className="checklist">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/checklist.svg"} alt="discuss"/>
                        <span>Checklist</span>
                    </div>
                    {
                        !showAddCheckList && <CustomButton text="Add an item" clickHandler={()=>setShowChecklist(true)} margin="0px" padding="9px" borderRadius="5px"/>
                    }
                </div>
                <div className="progress">
                    <span className="progressNo">{checklistPercentage}</span>
                    <span className="percent"></span>
                </div>
                <div className="checklistItems">
                    {
                        Object.entries(check_list).map((val, key)=>{
                            const checked = val[1].action;
                            const icon = checked?`${ASSETS_BASE_URL}/images/common/checkedTicker.svg`:`${ASSETS_BASE_URL}/images/common/emptyTicker.svg`;
                            return <div className={`item ${checked?'checkedItem':''}`} key={key}>
                                <div className="checkItem" onClick={()=>updateCheckList(val[0])}>
                                    <img src={icon} alt="discuss"/>
                                    <span className="checkedText">{val[0]}</span>
                                </div>
                                <img src={`${ASSETS_BASE_URL}/images/common/delete.svg`} className="deleteIcon" onClick={()=>updateCheckList(val[0], true)}/>
                            </div>
                        })
                    }
                    {
                        showAddCheckList?
                        <Fragment>
                            <input type="text" placeholder="Add an item" value={checkList} onChange={(e)=>setCheckList(e.target.value)}/>
                            <div className="checklistCta">
                                <CustomButton text="Add" clickHandler={addCheckList} margin="0px 8px 0px 0px" padding="9px" borderRadius="5px" backgroundColor="#747BB4"/>
                                <CustomButton text="Cancel" clickHandler={()=>{
                                    setCheckList('');
                                    setShowChecklist(false);
                                }} margin="0px" padding="9px" borderRadius="5px" backgroundColor="#FE9874"/>
                            </div>
                        </Fragment>
                        :null
                    }
                </div>
            </div>

            <div className="submitCta">
                <CustomButton text="Update" clickHandler={updateTaskDetils} margin="0px 8px 0px 0px" padding="10px 30px" borderRadius="5px" backgroundColor="#747BB4"/>
                <CustomButton text="Cancel" clickHandler={handleBackBtnClick} margin="0px" padding="10px 30px" borderRadius="5px" backgroundColor="#FE9874"/>
            </div>

            <div className={messageSection}>
                <div className="taskName">
                    <img className="icon" src={ASSETS_BASE_URL+"/images/common/message.svg"} alt="discuss"/>
                    <span>Activity</span>
                </div>
                <div className="messageSection">
                    <PostCommentView taskId={dataParams.task_id} updateTaskStatus={updateTaskStatus}/>
                    {
                        dataParams.tasks_comment.map((val, key)=>{
                            const { user_details, msg, created_at, id } = val;
                            return <div className="msgView" key={key}>
                                <span className="profile">{getNameInitialHelper(user_details.user_name)}</span>
                                <div className="commentSection">
                                    <div className="info">
                                        <span className="name">{capitalizeFirstLetter(user_details.user_name)}</span>
                                        <span className="time">{`${getFormattedTime(created_at)}, ${getFormattedDate(created_at).formattedDate}`}</span> 
                                    </div>
                                    <div className="msg">{msg}</div>
                                    <div className="deleteComment">
                                        <CustomButton text="Delete" clickHandler={()=>deleteCommentClicked(id)} margin="0px 0px 8px 0px" padding="10px 30px" borderRadius="5px" backgroundColor="#CF3030"/>
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

export default TaskInfo;