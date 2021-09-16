import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFullUserProfile, createFullUserProfile, updateUserProfile, updateProfile } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import CustomToaster from '@components/CustomToaster';
import ProfileForm from './ProfileForm.js';
import ProfileView from './ProfileView.js';
import { container, progressBar } from './style.js';

const CreateProfile = (props) => {
    const { isProfileView = false } = props;
    let editID = '';
    if (props && props.match && props.match.params) {
        editID = props.match.params.id;
    }
    const dispatch = useDispatch();
    const history = useHistory();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { fullProfileInfo, fullProfileLoading, userInfo = {}, originalFullProfileInfo } = taskInfo;
    const isProfileExist = userInfo && userInfo.profile_exists;
    const [activeState, setActive] = useState(editID ? parseInt(editID) : 1);
    const [loading, setLoading] = useState(false);
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    const editProfileRedirect = () => {
        history.push('/profile');
        //setActive(1);
        //getFullUserProfile({}, dispatch);
    }

    const activeWidgetData = useMemo(() => {
        let activeWidgetInfo = {
            widget: '',
            dataParams: {},
            displayText: ''
        }
        if (!fullProfileLoading && fullProfileInfo.profile) {
            const { profile, education_assessment, qualification, work_experience, relative_in_canada } = fullProfileInfo;
            if (activeState === 1) {
                activeWidgetInfo = {
                    widget: 'profile',
                    dataParams: { ...profile },
                    displayText: 'Personal Details'
                }
            } else if (activeState === 2) {
                activeWidgetInfo = {
                    widget: 'education_assessment',
                    dataParams: [...education_assessment],
                    displayText: 'Educational Credential Assessment',
                    isMultiple: true
                }
            } else if (activeState === 3) {
                activeWidgetInfo = {
                    widget: 'qualification',
                    dataParams: [...qualification],
                    displayText: 'Education',
                    isMultiple: true
                }
            } else if (activeState === 4) {
                activeWidgetInfo = {
                    widget: 'work_experience',
                    dataParams: [...work_experience],
                    displayText: 'Work Experience',
                    isMultiple: true
                }
            } else if (activeState === 5) {
                activeWidgetInfo = {
                    widget: 'relative_in_canada',
                    dataParams: { ...relative_in_canada },
                    displayText: 'Relative in Canada (if any)'
                }
            }
        }
        return activeWidgetInfo;
    }, [activeState, fullProfileInfo, fullProfileLoading])

    useEffect(() => {
        if (!editID || !(fullProfileInfo && fullProfileInfo.profile)) {
            getFullUserProfile({}, dispatch);
        }
    }, [])

    const handleFormNavigation = (isNext = false) => {
        if (isNext) {
            const { widget, dataParams, isMultiple = false } = activeWidgetData;

            let isError = false;
            let newDataParams = {};

            if (isMultiple) {
                newDataParams = [];
                let subFieldItems = {};
                dataParams.map((subField, subIndex) => {
                    subFieldItems={};
                    //newDataParams[subIndex] = {};
                    Object.entries(subField).map((val, key) => {
                        const [fieldType, dataValues] = val;
                        const { value, labels } = dataValues;
                        if (!labels) return;
                        let showError = false;
                        if (!value) {
                            isError = true;
                            showError = true;
                        }
                        subFieldItems[fieldType] = { ...dataValues, showError };
                    })
                    newDataParams.push(subFieldItems);
                })
            } else {
                Object.entries(dataParams).map((val, key) => {
                    const [fieldType, dataValues] = val;
                    const { value, labels } = dataValues;
                    if (!labels) return;
                    let showError = false;
                    if (!value) {
                        isError = true;
                        showError = true;
                    }
                    newDataParams[fieldType] = { ...dataValues, showError }
                })
            }
            let updatedParams = {
                data: newDataParams,
                type: widget,
                isUpdate: isMultiple
            }
            if (isError) {
                updateUserProfile(updatedParams, dispatch);
                return;
            };
            if (activeState == 5) {
                handleCreateForm();
            } else {
                setActive(val => val + 1);
            }
        } else {
            setActive(val => val - 1);
        }
    }

    const handleCreateForm = () => {
        setLoading(true);
        if (isProfileExist) {
            updateProfile(fullProfileInfo, dispatch, (resp, err) => {
                setLoading(false);
                if (resp) {
                    setToasterInfo({
                        isVisible: true,
                        isError: false,
                        isSuccess: true,
                        msg: 'Profile Updated Successfully'
                    });

                } else {
                    setToasterInfo({
                        isVisible: true,
                        isError: true,
                        isSuccess: false,
                        msg: 'Failed Please try again later'
                    });
                }
                setTimeout(() => {
                    hideToaster();
                    if (resp) {
                        editProfileRedirect();
                    }
                }, 1000);
            });
            return;
        }

        createFullUserProfile(fullProfileInfo, dispatch, (resp, err) => {
            setLoading(false);
            if (resp) {
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Profile Created Successfully'
                });
            } else {
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed Please try again later'
                });
            }
            setTimeout(() => {
                hideToaster();
                if (resp) {
                    editProfileRedirect();
                }
            }, 1000);
        });
    }

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
        })
    }

    const { widget, dataParams, displayText, isMultiple = false } = activeWidgetData;

    const handleWidgetUpdate = (index, isDelete=false)=>{
        if(Array.isArray(dataParams)){
            let newDataParams = [];
            if(isDelete){
                newDataParams = dataParams.filter((x, key)=>{
                    if(key==index){
                        return false;
                    }
                    return true;
                })
                
            }else if(originalFullProfileInfo && originalFullProfileInfo[widget] && originalFullProfileInfo[widget].length){
                let newAddedEntity = {};
                newDataParams = [...dataParams];
                Object.entries(originalFullProfileInfo[widget][0]).map((val, key) => {
                    const [fieldType, dataValues] = val;
                    newAddedEntity[fieldType] = {...dataValues, value:'', name:''};
                })
                console.log(newAddedEntity);
                newDataParams.push(newAddedEntity);
            }
            const updatedParams = {
                data: newDataParams,
                type: widget,
                isUpdate: true
            }
            updateUserProfile(updatedParams, dispatch);
        }
    }

    const renderView = () => {
        return (
            <Fragment>
                {
                    !isProfileView ?
                        <div className={progressBar + " " + "progMainCont"}>
                            <div className="desktopProgressBar">
                                {
                                    editID ? null :
                                        <div className="leftPorgressBar">
                                            <ul className="progressbar">
                                                <li className={activeState === 1 ? 'active' : ''}></li>
                                                <li className={activeState === 2 ? 'active' : ''}></li>
                                                <li className={activeState === 3 ? 'active' : ''}></li>
                                                <li className={activeState === 4 ? 'active' : ''}></li>
                                                <li className={activeState === 5 ? 'active' : ''}></li>
                                            </ul>
                                        </div>
                                }
                                <div className="userFormsMainContainer customEditProfile">
                                    <div className="editProfSteps">
                                        <h3>{displayText}</h3>
                                        <div className="formsScroll">
                                            {
                                                isMultiple ?
                                                    <div className="multipleWidgetWrapper">
                                                    {
                                                        dataParams.map((subField, subIndex) => {
                                                            return <div>
                                                                <p onClick={()=>handleWidgetUpdate(subIndex, true)}>Delete</p>
                                                                {
                                                                    Object.entries(subField).map((val, key) => {
                                                                        const [fieldType, dataValues] = val;
                                                                        return <ProfileForm fieldType={fieldType} dataParams={dataValues} key={`${widget}_${key}`} widget={widget} subIndex={subIndex} isMultiple />
                                                                    })
                                                                }
                                                            </div>
                                                        })
                                                    }
                                                    <p onClick={()=>handleWidgetUpdate(0, false)}>Add More</p>
                                                    </div>
                                                    
                                                    : Object.entries(dataParams).map((val, key) => {
                                                        const [fieldType, dataValues] = val;
                                                        return <ProfileForm fieldType={fieldType} dataParams={dataValues} key={`${widget}_${key}`} widget={widget} />
                                                    })
                                            }
                                        </div>
                                        <div className="btnCont">
                                            {
                                                editID ? <button onClick={handleCreateForm}>Update</button>
                                                    : <Fragment>
                                                        {
                                                            activeState > 1 ? <button onClick={() => handleFormNavigation(false)}>Previous</button> : null
                                                        }
                                                        {
                                                            activeState == 5 ? <button onClick={() => handleFormNavigation(true)}>{isProfileExist ? 'Update' : 'Create'}</button>
                                                                : <button onClick={() => handleFormNavigation(true)}>Next</button>
                                                        }
                                                    </Fragment>

                                            }
                                        </div>
                                    </div>
                                    {/* <div className="stepAddImg">
                                        <img className="img-fluid" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        : <ProfileView fullProfileInfo={fullProfileInfo} userInfo={userInfo} />
                }
            </Fragment>
        )
    }

    return (
        <div className={container}>
            {
                loading ? <div className={loaderView}><LoadingWidget /></div> : null
            }
            {
                fullProfileLoading ? <div className={loaderView}><LoadingWidget /></div> : renderView()
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />

        </div>
    )
}

export default CreateProfile;