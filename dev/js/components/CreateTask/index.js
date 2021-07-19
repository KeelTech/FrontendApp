import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomSelect from '@components/CustomSelect';
import CustomButton from '@components/CustomButton';
import { createTask } from '@actions';
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

const CreateTask = ({ toggleAddTaskView, caseId })=>{
    const dispatch = useDispatch();
    const [dataParams, setDataParams] = useState({
        title: '',
        description: '',
        priority: 0,
        due_date: '',
        check_list : {},
        tags: 'important',
        case: caseId||''
    })

    const { title, description, priority, due_date, check_list, tags } = dataParams;
    const[aa, setDescription] = useState('');

    const handlePriorityChange = (val)=>{

    }

    const addMember = ()=>{

    }

    const setDataValues = (dataVal)=>{
        setDataParams((val)=>{ return {...val, ...dataVal} });
    }

    const createTaskClicked = ()=>{
        createTask(dataParams, dispatch, (resp, err)=>{

        })   
    }
console.log(dataParams);
    return(
        <div className={container}>
            <h2>New Task</h2>
            <div className="formView">
                <div className="field">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/task.svg"} alt="task"/>
                        <span>Task Name</span>
                    </div>
                    <input type="text" placeholder="Enter Task Name" value={title} onChange={(e)=>setDataValues({title: e.target.value})}/>
                </div>
                <div className={taskStatus}>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL+"/images/common/member.svg"} alt="home"/>
                            <span>Members</span>
                        </div>
                        <div className="member">
                            {/* <CustomButton text="Add Member" clickHandler={addMember} margin="0px" padding="9px" borderRadius="5px" mFontSize="10px"/> */}
                            {/*<span>S</span>
                             <span className={memberCard({val: 1, bgcolor: '#C1E0B6'})}>M</span>
                            <span className={memberCard({val: 2, bgcolor: '#B8D4D6'})}>C</span> */}
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
                        <input type="date" id="dueDate" name="dueDate" onChange={(e)=>{console.log(e);setDataValues({due_date: new Date(e.target.value)})} }/>
                    </div>
                </div>

                <div className="field">
                    <div className="taskName">
                        <img className="icon" src={ASSETS_BASE_URL+"/images/common/description.svg"} alt="discuss"/>
                        <span>Description</span>
                    </div>
                    <span className="discussionTxt">
                        <textarea cols="50" rows="10" value={description} placeholder="Enter Description" onChange={(e)=>setDataValues({description: e.target.value})}></textarea>
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
                            <input type="text" placeholder="Enter Task Name" onChange={(e)=>setDataValues({title: e.target.value})}/>
                        </div>
                    </div>
                </div>

                <div className={cta}>
                    <CustomButton text="Cancel" clickHandler={toggleAddTaskView} margin="0px 8px 0px 0px" padding="10px 16px" borderRadius="4px" backgroundColor="#DC3545" fontColor="16px" fontWeight="600" fontColor="#FFFFFF"/>
                    <CustomButton text="Save Task" clickHandler={createTaskClicked} margin="0px" padding="10px 16px" borderRadius="4px" backgroundColor="#28A745" fontColor="16px" fontWeight="600" fontColor="#FFFFFF"/>
                </div>

            </div>        
        </div>
    )
}

export default CreateTask;