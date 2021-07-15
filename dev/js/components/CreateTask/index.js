import React, { useState } from 'react';
import CustomSelect from '@components/CustomSelect';
import CustomButton from '@components/CustomButton';
import { container, taskStatus, messageSection, checkListCont, attachmentCont, cta } from './style.js';


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

const CreateTask = ({ toggleAddTaskView })=>{
     
    const[description, setDescription] = useState('');
    const handlePriorityChange = (val)=>{

    }

    const addMember = ()=>{

    }

    return(
        <div className={container}>
            <h2>New Task</h2>
            <div className="formView">
                <div className="field">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/task.svg"} alt="task"/>
                        <span>Task Name</span>
                    </div>
                    <input type="text" placeholder="Enter Task Name"/>
                </div>
                <div className={taskStatus}>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL+"/images/common/member.svg"} alt="home"/>
                            <span>Members</span>
                        </div>
                        <div className="member">
                            <CustomButton text="Add Member" clickHandler={addMember} margin="0px" padding="9px" borderRadius="5px"/>
                            {/*<span>S</span>
                             <span className={memberCard({val: 1, bgcolor: '#C1E0B6'})}>M</span>
                            <span className={memberCard({val: 2, bgcolor: '#B8D4D6'})}>C</span> */}
                        </div>
                    </div>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL+"/images/common/chevron.svg"} alt="home"/>
                            <span>Select Priority</span>
                        </div>
                        {/* <span className="status">

                        </span> */}
                        <CustomSelect options={PriorityList} defaultOption={PriorityList[0]} clickHandler={handlePriorityChange}/>
                    </div>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL+"/images/common/blueCalendar.svg"} alt="home"/>
                            <span>Select Due Date</span>
                        </div>
                        <input type="date" id="dueDate" name="dueDate"/>
                    </div>
                </div>

                <div className="field">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/description.svg"} alt="discuss"/>
                        <span>Description</span>
                    </div>
                    <span className="discussionTxt">
                        <textarea cols="50" rows="10" value={description} placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </span>
                </div>

                <div className={attachmentCont}>
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/attachment.svg"} alt="discuss"/>
                        <span>Attachments</span>
                    </div>
                    <CustomButton text="Add a document" clickHandler={addMember} margin="0px" padding="9px" borderRadius="5px"/>
                </div>

                <div className={checkListCont}>
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/checklist.svg"} alt="discuss"/>
                        <span>Checklist</span>
                    </div>
                    <CustomButton text="Add an item" clickHandler={addMember} margin="0px" padding="9px" borderRadius="5px"/>
                </div>

                <div className={messageSection}>
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/message.svg"} alt="discuss"/>
                        <span>Activity</span>
                    </div>
                    <div className="messageSection">
                        <div className="msgView">
                            <span className="profile">SW</span>
                            <input type="text" placeholder="Enter Task Name"/>
                        </div>
                    </div>
                </div>

                <div className={cta}>
                    <CustomButton text="Cancel" clickHandler={toggleAddTaskView} margin="0px 8px 0px 0px" padding="10px 16px" borderRadius="4px" backgroundColor="#DC3545" fontColor="16px" fontWeight="600" fontColor="#FFFFFF"/>
                    <CustomButton text="Save Task" clickHandler={addMember} margin="0px" padding="10px 16px" borderRadius="4px" backgroundColor="#28A745" fontColor="16px" fontWeight="600" fontColor="#FFFFFF"/>
                </div>

            </div>        
        </div>
    )
}

export default CreateTask;