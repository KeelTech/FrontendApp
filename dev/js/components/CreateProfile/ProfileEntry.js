import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFullUserProfile, createFullUserProfile, updateUserProfile, updateProfile, getCountryList } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import CustomToaster from '@components/CustomToaster';
import ProfileForm from './ProfileForm.js';
import ProfileView from './ProfileView.js';
import { progressBar } from './style.js';

const CreateProfile = ({editID, isProfileView, taskInfo}) => {    
    const dispatch = useDispatch();
    const history = useHistory();
    const { fullProfileInfo, fullProfileLoading, userInfo = {}, countryList = [], originalFullProfileInfo = {} } = taskInfo;
    const { spouse_profile = {} } = fullProfileInfo || {};
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
    }
    const activeWidgetData = useMemo(() => {
        let activeWidgetInfo = {
            widget: '',
            dataParams: {},
            displayText: ''
        }
        if (!fullProfileLoading && fullProfileInfo.profile) {
            const { profile, education_assessment, qualification, work_experience, relative_in_canada, language_scores, family_information } = fullProfileInfo;
            if (activeState === 1) {
                activeWidgetInfo = {
                    widget: 'profile',
                    dataParams: { ...profile },
                    displayText: 'Personal Details (as on Passport)'
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
            } else if (activeState === 6) {
                activeWidgetInfo = {
                    widget: 'language_scores',
                    dataParams: [...language_scores],
                    displayText: 'Language Test scores',
                    isMultiple: true
                }
            } else if (activeState === 7) {
                activeWidgetInfo = {
                    widget: 'family_information',
                    dataParams: [...family_information],
                    displayText: 'Customer Family Information',
                    isMultiple: true
                }
            }
        }
        return activeWidgetInfo;
    }, [activeState, fullProfileInfo, fullProfileLoading])

    const handleFormNavigation = (isNext = false) => {
        let errorItem;
        if (isNext) {
            const { widget, dataParams, isMultiple = false } = activeWidgetData;

            let isError = false;
            let newDataParams = {};

            if (isMultiple) {
                newDataParams = [];
                let subFieldItems = {};
                let startDate = null, endDate = null;
                dataParams.map((subField, subIndex) => {
                    subFieldItems = {};
                    //newDataParams[subIndex] = {};
                    startDate = null;
                    endDate = null;
                    subFieldItems = {};
                    Object.entries(subField).map((val, key) => {
                        const [fieldType, dataValues] = val;
                        const { value, labels, is_optional } = dataValues;
                        let showError = false;
                        let errorMsg = '';
                        const elementIndex = `${widget}_${fieldType}_${subIndex}`;
                        const showCustomFields = false//fieldType.includes('city') || fieldType.includes('country') || fieldType.includes('state');
                        const isAddressType = fieldType.includes('full_address');

                        if ((!labels || showCustomFields) && !isAddressType) return;
                        const newLabel = labels && labels.toLowerCase() || '';
                        if (newLabel.includes('start') && newLabel.includes('date')) {
                            startDate = value;
                        } else if (newLabel.includes('end') && newLabel.includes('date') && startDate && value) {
                            let startD = new Date(startDate);
                            startDate = null;
                            let endD = new Date(value);
                            if (+startD >= +endD) {
                                isError = true;
                                showError = true;
                                errorMsg = 'End Date should less then Start Date';
                                if(!errorItem){
                                    errorItem = elementIndex;
                                }
                            }
                        }

                        if (!value && !isAddressType && !is_optional) {
                            isError = true;
                            showError = true;
                            if(!errorItem){
                                errorItem = elementIndex;
                            }
                        }
                        subFieldItems[fieldType] = { ...dataValues, showError, errorMsg };
                    })
                    newDataParams.push(subFieldItems);
                })
            } else {
                Object.entries(dataParams).map((val, key) => {
                    const [fieldType, dataValues] = val;
                    const { value, labels, is_optional } = dataValues;
                    const showCustomFields = false//fieldType.includes('city') || fieldType.includes('country') || fieldType.includes('state');
                    const isAddressType = fieldType.includes('full_address');
                    if ((!labels || showCustomFields) && !isAddressType) return;
                    const elementIndex = `${widget}_${fieldType}_0`;

                    let showError = false;
                    if (!value && !isAddressType && !is_optional) {
                        isError = true;
                        showError = true;
                        if(!errorItem){
                            errorItem = elementIndex;
                        }
                    }
                    newDataParams[fieldType] = { ...dataValues, showError }

                    if (fieldType == "marital_status" && dataValues && dataValues.value == 2 && spouse_profile) {
                        const newDataParams1 = {};
                        let isError1 = false;
                        Object.entries(spouse_profile).map((val1) => {
                            const [fieldType1, dataValues1] = val1;
                            const elementIndex1 = `spouse_profile_${fieldType1}_0`;

                            if (!dataValues1.labels) return;
                            let showError1 = false;
                            if (!dataValues1.value && !isAddressType && !dataValues1.is_optional) {
                                isError1 = true;
                                showError1 = true;
                                isError = true;
                                if(!errorItem){
                                    errorItem = elementIndex1;
                                }
                            }
                            newDataParams1[fieldType1] = { ...dataValues1, showError: showError1 }
                        })
                        if (isError1) {
                            let updatedParams = {
                                data: newDataParams1,
                                type: "spouse_profile",
                                isUpdate: false
                            }
                            updateUserProfile(updatedParams, dispatch);
                        }

                    }
                })
            }
            if(errorItem && document.getElementById(errorItem)){
                document.getElementById(errorItem).scrollIntoView();
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
            if (activeState == 5 || isProfileExist) {
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
            const postData = {
                [activeWidgetData.widget]: activeWidgetData && fullProfileInfo[activeWidgetData.widget]
            }
            if(activeWidgetData.widget==="profile"){
                postData["spouse_profile"] = fullProfileInfo["spouse_profile"]
            }
            updateProfile(postData, dispatch, (resp, err) => {
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

    const handleWidgetUpdate = (index, isDelete = false) => {
        if (Array.isArray(dataParams)) {
            let newDataParams = [];
            if (isDelete) {
                newDataParams = dataParams.filter((x, key) => {
                    if (key == index) {
                        return false;
                    }
                    return true;
                })

            } else if (originalFullProfileInfo && originalFullProfileInfo[widget] && originalFullProfileInfo[widget].length) {
                let newAddedEntity = {};
                newDataParams = [...dataParams];
                Object.entries(originalFullProfileInfo[widget][0]).map((val, key) => {
                    const [fieldType, dataValues] = val;
                    newAddedEntity[fieldType] = { ...dataValues, value: '', name: '' };
                })
                if (newAddedEntity.id) {
                    delete newAddedEntity.id;
                }
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
        let isSpouseExist = false;
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
                                        <h3 className="addMoreBtnHead">{displayText}
                                            {
                                                isMultiple ? <button className="formAddMore" onClick={() => handleWidgetUpdate(0, false)}>Add More Details +</button>
                                                    : null
                                            }
                                        </h3>
                                        <div className="formsScroll forCustomAddOnForm">
                                            {
                                                isMultiple ?
                                                    <Fragment>
                                                        {
                                                            dataParams.map((subField, subIndex) => {
                                                                return <div className="mutliFromMain" key={`${widget}_${subIndex}`}>
                                                                    <div className="multipleForms">
                                                                        {
                                                                            Object.entries(subField).map((val, key) => {
                                                                                const [fieldType, dataValues] = val;
                                                                                return <Fragment key={`${widget}_${key}_${subIndex}`}><ProfileForm fieldType={fieldType} dataParams={dataValues}  widget={widget} subIndex={subIndex} isMultiple />
                                                                                </Fragment>
                                                                            })
                                                                        }
                                                                        {
                                                                            dataParams.length == 1 ? null : <div className="delBtnHeight">
                                                                                <h5>{subIndex == 0 ? '' : 'Additional Information'}</h5>
                                                                                <button className="formdelBtn" onClick={() => handleWidgetUpdate(subIndex, true)}><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            })
                                                        }
                                                    </Fragment>

                                                    : <Fragment>
                                                        {
                                                            Object.entries(dataParams).map((val, key) => {
                                                                const [fieldType, dataValues] = val;

                                                                if (!isSpouseExist) {
                                                                    isSpouseExist = fieldType == "marital_status" && dataValues && dataValues.value == 2;
                                                                }
                                                                return <ProfileForm fieldType={fieldType} dataParams={dataValues} key={`${widget}_${key}`} widget={widget} />
                                                            })
                                                        }
                                                        {
                                                            isSpouseExist ?
                                                                <div className="customSpouseAdd">
                                                                    <h3 className="addMoreBtnHead">Spouse Details</h3>
                                                                    <div className="spouseGrids">
                                                                        {
                                                                            spouse_profile && Object.entries(spouse_profile).map((val, key) => {
                                                                                const [fieldType1, dataValues1] = val;
                                                                                return <ProfileForm fieldType={fieldType1} dataParams={dataValues1} key={`${widget}_${key}`} widget="spouse_profile" />
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                                : null
                                                        }
                                                    </Fragment>
                                            }
                                        </div>
                                        <div className="btnCont">
                                            {
                                                editID ? <button onClick={() => handleFormNavigation(true)}>Update</button>
                                                    : <Fragment>
                                                        {
                                                            activeState > 1 ? <button onClick={() => handleFormNavigation(false)}>Previous</button> : null
                                                        }
                                                        {
                                                            activeState == 5 ? <button onClick={() => handleFormNavigation(true)}>Create</button>
                                                                : <button onClick={() => handleFormNavigation(true)}>Next</button>
                                                        }
                                                    </Fragment>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <ProfileView fullProfileInfo={fullProfileInfo} userInfo={userInfo} />
                }
            </Fragment>
        )
    }

    // useEffect(() => {
    //     if (!editID || !(fullProfileInfo && fullProfileInfo.profile)) {
    //         getFullUserProfile({}, dispatch);
    //     }
    //     if (!countryList.length) {
    //         getCountryList({}, dispatch);
    //     }
    // }, [])

    return (
        <Fragment>
            {
                loading ? <div className={loaderView}><LoadingWidget /></div> : null
            }
            {
                fullProfileLoading ? <div className={loaderView}><LoadingWidget /></div> : renderView()
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />

        </Fragment>
    )
}

export default CreateProfile;