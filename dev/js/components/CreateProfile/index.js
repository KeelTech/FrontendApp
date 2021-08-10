import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFullUserProfile, createUserProfile } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import ProgressBar from './ProgressBar.js';
import ProfileForm from './ProfileForm.js';
import { container, progressBar } from './style.js';

const CreateProfile = ()=>{
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { fullProfileInfo, fullProfileLoading } = taskInfo;

    const [activeState, setActive] = useState(1);

    const activeWidgetData = useMemo(()=>{
        let activeWidgetInfo = {
            widget: '',
            dataParams: {},
            displayText: ''
        }
        if(!fullProfileLoading && fullProfileInfo.profile){
            const { profile, education_assessment, qualification, work_experience, relative_in_canada } = fullProfileInfo;
            if(activeState===1){
                activeWidgetInfo = {
                    widget: 'profile',
                    dataParams: {...profile},
                    displayText: 'Personal Details'
                }
            }else if(activeState===2){
                activeWidgetInfo = {
                    widget: 'education_assessment',
                    dataParams: {...education_assessment},
                    displayText: 'Education'
                }
            }else if(activeState===3){
                activeWidgetInfo = {
                    widget: 'qualification',
                    dataParams: {...qualification},
                    displayText: 'Educational Creational Assessment'

                }
            }else if(activeState===4){
                activeWidgetInfo = {
                    widget: 'work_experience',
                    dataParams: {...work_experience},
                    displayText: 'Work Experience'

                }
            }else if(activeState===5){
                activeWidgetInfo = {
                    widget: 'relative_in_canada',
                    dataParams: {...relative_in_canada},
                    displayText: 'Relative in Canada (if any)'
                }
            }
        }
        return activeWidgetInfo;
    },[activeState, fullProfileInfo, fullProfileLoading])

    useEffect(()=>{
        getFullUserProfile({}, dispatch);
    },[])

    const handleFormNavigation = (isNext=false)=>{
        if(isNext){
            setActive(val=>val+1);
        }else{
            setActive(val=>val-1);
        }
    }

    const handleCreateForm = ()=>{
        createUserProfile(fullProfileInfo, dispatch);
    }

    console.log(activeWidgetData);

    const { widget, dataParams, displayText } = activeWidgetData;
    return(
        <div className={container}>
            {
                fullProfileLoading?<div className={loaderView}><LoadingWidget/></div>:null
            }
            {/* <ProgressBar/> */}
            <div className={progressBar}>
            <div className="desktopProgressBar">
                <div className="leftPorgressBar">
                    <ul class="progressbar">
                        <li className={activeState===1?'active':''}></li>
                        <li className={activeState===2?'active':''}></li>
                        <li className={activeState===3?'active':''}></li>
                        <li className={activeState===4?'active':''}></li>
                        <li className={activeState===5?'active':''}></li>
                    </ul>
                </div>
                <div className="userFormsMainContainer">
                    <h3>{displayText}</h3>
                    <div className="formsScroll">
                        {
                            Object.entries(dataParams).map((val, key)=>{
                                const [fieldType, dataValues] = val;
                                return <ProfileForm fieldType={fieldType} dataParams={dataValues} key={`${widget}_${key}`} widget={widget}/>
                            })
                        }
                    </div>
                    <div className="btnCont">
                        {
                            activeState>1?<button onClick={()=>handleFormNavigation(false)}>Previous</button>:null
                        }
                        {
                            activeState==5?<button onClick={handleCreateForm}>Submit</button>
                            :<button onClick={()=>handleFormNavigation(true)}>Next</button>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CreateProfile;