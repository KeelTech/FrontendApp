import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AttachmentCard from '@components/AttachmentCard';
import { SET_MENUBAR_STATE } from '@constants/types';
import { container, taskStatus, discussionSection, memberCard, attachmentSection, checklistSection, messageSection } from './style.js';

const TaskDetail = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();

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

    return(
        <div className={container}>
            <div className="statusCont">
                <span className="statusText">Mark as completed</span>
                <span className="status">Overdue</span>
            </div>
            <div className="taskName">
                <img className="icon" src={ASSETS_BASE_URL+"/images/common/task.svg"} alt="task"/>
                <span>Task Name</span>
                <span className="status mobileView">Overdue</span>
            </div>
            <div className="signDoc">
                <span className="sign">Submit Signed Document</span>
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
                        <span>Priority</span>
                    </div>
                    <span className="status">High</span>
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
                <span className="discussionTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam egestas mauris, volutpat commodo turpis viverra vitae. Fusce nec nunc eget purus euismod consectetur eu quis justo. Vivamus condimentum elementum ex et egestas. Ut id urna eros. Curabitur efficitur, tortor vel vestibulum sollicitudin, ex nibh tristique sem, vitae commodo felis purus et lacus. Vestibulum condimentum condimentum ultricies..</span>
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
                    <AttachmentCard/>
                    <AttachmentCard/>
                    <AttachmentCard/>
                    <AttachmentCard/>
                    <AttachmentCard/>
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
                    <div className="item checkedItem">
                        <img src={ASSETS_BASE_URL+"/images/common/checkedTicker.svg"} alt="discuss"/>
                        <span className="checkedText">Upload this document</span>
                    </div>
                    <div className="item checkedItem">
                        <img src={ASSETS_BASE_URL+"/images/common/checkedTicker.svg"} alt="discuss"/>
                        <span className="checkedText">Upload this document</span>
                    </div>
                    <div className="item">
                        <img src={ASSETS_BASE_URL+"/images/common/emptyTicker.svg"} alt="discuss"/>
                        <span className="checkedText">This is unchecked checklist item</span>
                    </div>
                    <div className="item">
                        <img src={ASSETS_BASE_URL+"/images/common/emptyTicker.svg"} alt="discuss"/>
                        <span className="checkedText">This is unchecked checklist item</span>
                    </div>
                    <div className="item">
                        <img src={ASSETS_BASE_URL+"/images/common/emptyTicker.svg"} alt="discuss"/>
                        <span className="checkedText">This is unchecked checklist item</span>
                    </div>
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
                    <div className="msgView">
                        <span className="profile">SW</span>
                        <div className="commentSection">
                            <div className="info">
                                <span className="name">Shubh Wadekar </span>
                                <span className="time">8:53pm, 27 June 2021</span> 
                            </div>
                            <div className="msg">
                                This is some comment which is relevant to the above task. It can be as big as we want it to be. It can consist of more than one lines and is designed in such a way that it won’t disturb other UI elements.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TaskDetail;