import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { isMobileView, loaderView } from '@constants';
import { updateTemplateDetail, deleteTemplate } from '@actions';
import CustomButton from '@components/CustomButton';
import CustomSelect from '@components/CustomSelect';
import CustomToaster from '@components/CustomToaster';
import LoadingWidget from '@components/LoadingWidget';

import { containerView, taskStatus, discussionSection, checklistSection } from './style.js';

const PriorityList = [
    {
        id: "1",
        val: 'High'
    },
    {
        id: "2",
        val: 'Medium'
    },
    {
        id: "0",
        val: 'Low'
    }
]

const TemplateDetail = ({ activeTask, refetchList, addNewTask, handleBackBtnClick })=>{
    const dispatch = useDispatch();
    const [checkList, setCheckList] = useState('');
    const [dataParams, setDataParams] = useState(activeTask);
    const [loading, setLoading] = useState(false);
    const [showAddCheckList, setShowChecklist] = useState(false);
    const [showDeleteConfirmation, setDeleteConfirmation] = useState(false);

    const { title='', checklist: check_list=[], priority='1', description=''} = dataParams||{};
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    const [priorityInfo, setPriorityInfo] = useState(() => {
        let selectedVal = PriorityList.filter(x => x.id == priority);
        if (selectedVal.length) {
            return selectedVal[0]
        }
        return PriorityList[0];
    });

    useEffect(()=>{
        let newPriority = {}, selectedVal={};
        if(!activeTask){
            selectedVal = PriorityList.filter(x => x.id == '1');
            setDataParams({
                title: '',
                checklist: [],
                priority: '1',
                description: ''
            });
        }else{
            selectedVal = PriorityList.filter(x => x.id == activeTask.priority);
            setDataParams(activeTask);
        }
        if (selectedVal.length) {
            newPriority =  selectedVal[0]
        }else{
            newPriority = PriorityList[0];
        }
        setPriorityInfo(newPriority);
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
            setDataValues({ checklist: newCheckList });
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
        setDataValues({ checklist: newCheckList });
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

    const clickDeleteTemplate = () => {
        setLoading(true);
        deleteTemplate({ id: dataParams.id }, dispatch, (resp, err) => {
            setLoading(false);
            updateTaskStatus(resp, !resp, 'Failed, Please try again later', 'Deleted Successfully');
            if (isMobileView() && handleBackBtnClick) {
                handleBackBtnClick();
            }
        })
    }

    const updateTemplateDetails = () => {
        setLoading(true);
        let postDataParams = {
            id: dataParams.id,
            checklist: dataParams.checklist,
            priority: priorityInfo.id,
            title: dataParams.title,
            description: dataParams.description
        }
        updateTemplateDetail(postDataParams, dispatch, (resp, err) => {
            setLoading(false);
            updateTaskStatus(resp, err, 'Failed, Try again later', 'Template Updated successfully');
            if (!isMobileView() && refetchList && !resp) {
                refetchList();
            }
        })
    }

    return(
        <div className={containerView + " " + "innerTask agneTaskMobile"}>
            {
                loading && <div className="loadingScrn"><LoadingWidget /></div>
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} /> 
            {
                // showDeleteConfirmation ? <DeleteConfirmationPopup togglePopup={toggleDeletePopup} deletePopupHandler={deletePopupHandler} /> : null
            }
             {/* <FloatingChatWidget caseId={case_id} currentUserId={agent} chatHeaderName={first_name}/>
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} /> */}
            <div className="signDoc">
                <span className="backBtn" onClick={handleBackBtnClick}><i className="fa fa-arrow-left" aria-hidden="true"></i> Back</span>
            </div>
            <div className="signDoc">
                <input type="text" value={title} onChange={(e) => setDataValues({ title: e.target.value })}/>
            </div>
            <div className="taskScrollSection">
                <div className={taskStatus + " " + "taskStatusNew"}>
                    <div className="view">
                        <div className="taskName">
                            <img className="icon" src={ASSETS_BASE_URL + "/images/common/chevron.svg"} alt="home" />
                            <span className="hideMobile">Select</span><span>Priority</span>
                        </div>
                        <CustomSelect handleValueChange options={PriorityList} value={priorityInfo} defaultOption={priorityInfo} clickHandler={handlePriorityChange} />
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
                                    <div className="checkItem">
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
                    addNewTask?null:<CustomButton text="Delete" clickHandler={clickDeleteTemplate} margin="0px 0px 8px 0px" padding="10px 50px" borderRadius="5px" backgroundColor="#CF3030" />
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