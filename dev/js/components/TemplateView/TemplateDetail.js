import React, { useState, useEffect, Fragment } from 'react';

import CustomButton from '@components/CustomButton';
import CustomSelect from '@components/CustomSelect';
import LoadingWidget from '@components/LoadingWidget';

import { containerView, taskStatus, discussionSection, checklistSection } from './style.js';

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

const TemplateDetail = ({ activeTask, refetchList, addNewTask, handleBackBtnClick })=>{
    const [checkList, setCheckList] = useState('');
    const [dataParams, setDataParams] = useState(activeTask);
    const [loading, setLoading] = useState(false);
    const [showAddCheckList, setShowChecklist] = useState(false);
    const [showDeleteConfirmation, setDeleteConfirmation] = useState(false);

    const { title='', check_list=[], priority_name='Low', description=''} = dataParams||{};
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    const [priorityInfo, setPriorityInfo] = useState(() => {
        let selectedVal = PriorityList.filter(x => x.val == priority_name);
        if (selectedVal.length) {
            return selectedVal[0]
        }
        return PriorityList[0];
    });

    useEffect(()=>{
        if(!activeTask){
            setDataParams({
                title: '',
                check_list: [],
                priority_name: 'Low',
                description: ''
            });
        }else{
            setDataParams(activeTask);
        }
    },[activeTask, addNewTask])

    const setDataValues = (dataVal) => {
        setDataParams((val) => { return { ...val, ...dataVal } });
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

    const toggleDeletePopup = () => {
        setDeleteConfirmation(val => !val);
    }

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
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
                if(refetchList){
                    refetchList();
                }
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

    const deleteTemplate = () => {
        setLoading(true);
        // deleteTaskInfo({ taskId: dataParams.task_id }, dispatch, (resp, err) => {
        //     setLoading(false);
        //     updateTaskStatus(resp, !resp, 'Failed, Please try again later', 'Deleted Successfully');
        //     if (isMobileView()) {
        //         handleBackBtnClick();
        //     } else if (refetchList) {
        //         refetchList();
        //     }
        // })
    }

    const updateTemplateDetails = () => {
        setLoading(true);
        // let postDataParams = {
        //     task_id: dataParams.task_id,
        //     title: dataParams.title,
        //     description: dataParams.description,
        //     due_date: dataParams.due_date,
        //     check_list: dataParams.check_list,
        //     tags: '12',
        //     priority: priorityInfo.id
        // }
        // updateTask(postDataParams, dispatch, (resp, err) => {
        //     setLoading(false);
        //     updateTaskStatus(resp, err, 'Failed, Try again later', 'Task Updated successfully');
        //     if (!isMobileView()) {
        //         refetchList();
        //     }
        // })
    }

    return(
        <div className={containerView + " " + "innerTask agneTaskMobile"}>
            {
                loading && <div className="loadingScrn"><LoadingWidget /></div>
            }
            {
                // showDeleteConfirmation ? <DeleteConfirmationPopup togglePopup={toggleDeletePopup} deletePopupHandler={deletePopupHandler} /> : null
            }
             {/* <FloatingChatWidget caseId={case_id} currentUserId={agent} chatHeaderName={first_name}/>
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} /> */}
            <div className="signDoc">
                <input type="text" value={title} onChange={(e) => setDataValues({ title: e.target.value })}/>
                <span className="backBtn" onClick={handleBackBtnClick}><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</span>
            </div>
            <div className="taskScrollSection">
                <div className={taskStatus + " " + "taskStatusNew"}>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/chevron.svg"} alt="home" />
                            <span className="hideMobile">Select</span><span>Priority</span>
                        </div>
                        <CustomSelect options={PriorityList} defaultOption={priorityInfo} clickHandler={handlePriorityChange} />
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

                <div className={checklistSection({ progress: `0%` })}>
                    <div className="checklist">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/checklist.svg"} alt="discuss" />
                            <span>Checklist</span>
                        </div>
                        {
                            !showAddCheckList && <CustomButton text="Add an item" clickHandler={() => setShowChecklist(true)} margin="0px" padding="9px" borderRadius="5px" />
                        }
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
            </div>
            <div className="deleteTask customEditFor">
                {
                    addNewTask?null:<CustomButton text="Delete" clickHandler={deleteTemplate} margin="0px 0px 8px 0px" padding="10px 50px" borderRadius="5px" backgroundColor="#CF3030" />
                }
                
                <div className="submitCta">
                    <CustomButton text={addNewTask?"Create":"Update"} clickHandler={updateTemplateDetails} margin="0px 8px 0px 0px" padding="10px 30px" borderRadius="5px" backgroundColor="#747BB4" />
                    {/* <CustomButton text="Cancel" clickHandler={handleClick} margin="0px" padding="10px 30px" borderRadius="5px" backgroundColor="#FE9874" /> */}
                </div>
            </div>
        </div >
    )
}

export default TemplateDetail;