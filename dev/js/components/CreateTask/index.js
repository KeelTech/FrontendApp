import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isMobileView } from '@constants';
import CustomSelect from '@components/CustomSelect';
import CustomButton from '@components/CustomButton';
import { createTask } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import CustomToaster from '@components/CustomToaster';
import FileUpload from '@components/FileUpload';
import { loaderView } from '@constants';
import { container, taskStatus, checkListCont, attachmentCont, cta } from './style.js';

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

const CreateTask = ({ toggleAddTaskView, caseId })=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [dataParams, setDataParams] = useState({
        title: '',
        description: '',
        priority: 1,
        due_date: '',
        check_list : {},
        tags: 'important',
        case: caseId||''
    })
    const [loading, setLoading] = useState(false);
    const [checkList, setCheckList] = useState('');
    const [showAddCheckList, setShowChecklist] = useState(false);

    const { title, description, check_list, tags } = dataParams;

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const [openUploadDocumentModal, setOpenUploadModal] = useState(false);

    const toggleUploadModal = ()=>{
        setOpenUploadModal(val=>!val);
    }

    const addMember = ()=>{

    }

    const setDataValues = (dataVal)=>{
        setDataParams((val)=>{ return {...val, ...dataVal} });
    }

    const handlePriorityChange = (val)=>{
        setDataValues({priority: val.id})
    }

    const hideToaster = ()=>{
        setToasterInfo({
            isVisible: false
        })
    }

    const createTaskClicked = ()=>{
        setLoading(true);
        createTask(dataParams, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp){
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Created Successfully'
                });
                if(isMobileView()){
                    setTimeout(() => {
                        history.push(`/agent/tasks/${caseId}`);                        
                    }, 1000);
                }else{
                    toggleAddTaskView(true);
                }
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed, Try again later'
                });
                setTimeout(() => {
                    hideToaster();
                }, 1000);
            }
        })   
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

    const uploadFile = (val, resp)=>{
        toggleUploadModal();
        if(resp){
            setToasterInfo({
                isVisible: true,
                isError: false,
                isSuccess: true,
                msg: 'Uploaded Successfully'
            });
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
    }

    return(
        <div className={container}>
            {
                loading && <div className={loaderView}><LoadingWidget/></div>
            }
            {
                openUploadDocumentModal ?<FileUpload fileUploadModalClosed={toggleUploadModal} uploadFile={uploadFile} isUploadToServer/>:null
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
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
                        <CustomSelect options={PriorityList} defaultOption={PriorityList[0]} clickHandler={handlePriorityChange}/>
                    </div>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL+"/images/common/blueCalendar.svg"} alt="home"/>
                            <span className="hideMobile">Select</span><span>Due Date</span>
                        </div>
                        <input type="date" id="dueDate" name="dueDate" onChange={(e)=>setDataValues({due_date: new Date(e.target.value)})}/>
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
                    <CustomButton text="Add a document" clickHandler={toggleUploadModal} margin="0px" padding="9px" borderRadius="5px"/>
                </div>

                <div className={checkListCont}>
                    <div className="checklist">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL+"/images/common/checklist.svg"} alt="discuss"/>
                            <span>Checklist</span>
                        </div>
                        {
                            !showAddCheckList && <CustomButton text="Add an item" clickHandler={()=>setShowChecklist(true)} margin="0px" padding="9px" borderRadius="5px"/>
                        }
                    </div>
                    {
                        showAddCheckList?
                        <div className="checklistItems">
                        {
                            Object.entries(check_list).map((val, key)=>{
                                const checked = val[1].action||false;
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
                            <input type="text" placeholder="Add an item" value={checkList} onChange={(e)=>setCheckList(e.target.value)}/>
                            <div className="checklistCta">
                                <CustomButton text="Add" clickHandler={addCheckList} margin="0px 8px 0px 0px" padding="9px" borderRadius="5px" backgroundColor="#747BB4"/>
                                <CustomButton text="Cancel" clickHandler={()=>{
                                    setCheckList('');
                                    setShowChecklist(false);
                                }} margin="0px" padding="9px" borderRadius="5px" backgroundColor="#FE9874"/>
                            </div>
                        </div>
                        :null
                    }
                </div>

                {/* <div className={messageSection}>
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
                </div> */}

                <div className={cta}>
                    <CustomButton text="Cancel" clickHandler={()=>toggleAddTaskView(false)} margin="0px 8px 0px 0px" padding="10px 16px" borderRadius="4px" backgroundColor="#DC3545" fontColor="16px" fontWeight="600" fontColor="#FFFFFF"/>
                    <CustomButton text="Save Task" clickHandler={createTaskClicked} margin="0px" padding="10px 16px" borderRadius="4px" backgroundColor="#28A745" fontColor="16px" fontWeight="600" fontColor="#FFFFFF"/>
                </div>

            </div>        
        </div>
    )
}

export default CreateTask;