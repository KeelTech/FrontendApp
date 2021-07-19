import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AttachmentCard from '@components/AttachmentCard';
import CustomSelect from '@components/CustomSelect';
import { SET_AGENT_MENUBAR_STATE } from '@constants/types';
import { getTaskDetail } from '@actions';
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
        id: 3,
        val: 'Low'
    }
]
const TaskDetail = ({ activeTask })=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { taskDetail={} } = taskInfo||{};

    useEffect(()=>{
        if(activeTask){
            if(!(taskDetail && taskDetail[activeTask])){
                getTaskDetail({taskId: activeTask}, dispatch);
            }
        }

    },[activeTask, dispatch]);

    const handleBackBtnClick = ()=>{
       history.push('/agent/tasks/1234');
    }

    const handlePriorityChange = (val)=>{

    }

    const { title, priority_name, status_name, description, tasks_comment=[], tasks_docs=[], check_list=[] } = taskDetail && taskDetail[activeTask] || {};

    return(
        <div className={container}>
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
                    <CustomSelect options={PriorityList} defaultOption={PriorityList[0]} clickHandler={handlePriorityChange}/>
                </div>
                <div className="view">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/blueCalendar.svg"} alt="home"/>
                        <span className="hideMobile">Select</span><span>Due Date</span>
                    </div>
                    <input type="date" id="dueDate" name="dueDate"/>
                </div>
            </div>
            <div className={discussionSection}>
                <div className="taskName">
                    <img className="icon" src={ASSETS_BASE_URL+"/images/common/description.svg"} alt="discuss"/>
                    <span>Description</span>
                </div>
                <span className="discussionTxt">
                    <textarea cols="50" rows="10" value={description}></textarea>
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
                    <div className="msgView">
                        <span className="profile">SW</span>
                        <input type="text" placeholder="Write a Comment"/>
                    </div>
                    {
                        tasks_comment.map((val, key)=>{
                            const { user_details, user_name, msg, created_at, } = val;
                            return <div className="msgView" key={key}>
                                <span className="profile">{getNameInitialHelper(user_details.user_name)}</span>
                                <div className="commentSection">
                                    <div className="info">
                                        <span className="name">{capitalizeFirstLetter(user_details.user_name)}</span>
                                        <span className="time">{`${getFormattedTime(created_at)}, ${getFormattedDate(created_at)}`}</span> 
                                    </div>
                                    <div className="msg">{msg}</div>
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