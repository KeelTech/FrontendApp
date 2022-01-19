import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, getUserProfile, sendOTP, verifyOTP } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import CustomToaster from '@components/CustomToaster';
import { SelectMainCountry } from '@components/SelectCity';
import { container, progressBar } from './style.js';

const CreateProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { fullProfileInfo } = taskInfo;
    const [dataParams, setDataParams] = useState({
        phone_number: {
            value: '',
            labels: "Phone Number",
            type: "phone",
            lastVerifiedNo: '',
            otpSent: false,
            otpVerify: false
        },
        first_name: {
            value: '',
            labels: "First Name",
            type: "char"
        },
        last_name: {
            value: '',
            labels: "Last Name",
            type: "char",
            isRequired: false
        },
        age: {
            value: '',
            labels: "Age",
            type: "char"
        },
        current_country: {
            value: '',
            labels: "Current Country",
            type: "char"
        },
        desired_country: {
            value: '',
            labels: "Desired Country",
            type: "char"
        }
    });

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const [loading, setLoading] = useState('');

    const handleCreateForm = () => {
        const postParams = {};
        let isError = false;
        let newDataParams = {};
        Object.entries(dataParams).map((val, key) => {
            const [fieldType, dataValues] = val;
            const { value, type, lastVerifiedNo, isRequired=true } = dataValues;
            postParams[fieldType] = value;
            let showError = false;
            let otpVerify = false;
            if(isRequired){
                if(!value){
                    isError = true;
                    showError = true;
                }else if(type=='phone'){
                    if(lastVerifiedNo==value){
                        otpVerify = true;
                    }else{
                        isError = true;
                    }
                }
            }
            newDataParams[fieldType]= {...dataValues, showError, otpVerify, showOtpError: !otpVerify }
        })
        if (isError) {
            setDataParams(newDataParams);
            return;
        };
        setLoading(true);
        createProfile(postParams, dispatch, (resp, err) => {
            setLoading(false);
            if (resp) {
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Profile Created Successfully'
                });
                window.location.href = window.location.origin;
                //getUserProfile({}, dispatch);
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
            }, 1000);
        });
    }

    const handleChange = (val) => {
        setDataParams((oldState) => {
            return { ...oldState, ...val }
        })
    }

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
        })
    }

    const sendOTPClicked = ()=>{
        const mobileNo = dataParams && dataParams.phone_number && dataParams.phone_number.value;
        const postParams = {
            phone_number: mobileNo
        }
        if(!mobileNo){
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: 'Please Fill Valid Mobile No'
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }
        setLoading(true);
        sendOTP(postParams, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp){
                setDataParams((oldState)=>{
                    return {...oldState, ...{phone_number: {
                        value: mobileNo,
                        labels: "Phone Number",
                        type: "phone",
                        lastVerifiedNo: '',
                        otpSent: true
                    }}}
                })
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'OTP Sent Successfully'
                });
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed To Sent OTP'
                });
            }
            setTimeout(() => {
                hideToaster();
            }, 1000);
        })
    }

    const verifyOTPClicked = (otp)=>{
        const mobileNo = dataParams && dataParams.phone_number && dataParams.phone_number.value;
        const postParams = {
            otp
        }
        if(!otp){
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: 'Please Fill Valid OTP'
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }
        setLoading(true);
        verifyOTP(postParams, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp){
                setDataParams((oldState)=>{
                    return {...oldState, ...{phone_number: {
                        value: mobileNo,
                        labels: "Phone Number",
                        type: "phone",
                        lastVerifiedNo: mobileNo,
                        otpSent: true,
                    }}}
                })
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'OTP Verified Successfully'
                });
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed To Verify OTP'
                });
            }
            setTimeout(() => {
                hideToaster();
            }, 1000);
        })
    }

    return(
        <div className={container + ' ' + "firstTimeUserProfile"}>
            {
                loading ? <div className={loaderView}><LoadingWidget /></div> : null
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
            <div className={progressBar}>
                <div className="desktopProgressBar d-block customForFirst">
                    <div className="row">
                        <div className="col-md-7 col-12 mb-10">
                            <h1 className="crtMainHed">Let's get you started. </h1>
                            <p className="crtSubHed">Tell us about the amazing you!</p>
                            <div className="userFormsMainContainer MaxWithFull">
                                <div className="formsScroll newUserForm">
                                    {
                                        Object.entries(dataParams).map((val, key) => {
                                            const [fieldType, dataValues] = val;
                                            return <ProfileForm fieldType={fieldType} dataParams={dataValues} key={key} handleChange={handleChange} sendOTPClicked={sendOTPClicked} verifyOTPClicked={verifyOTPClicked}/>
                                        })
                                    }
                                </div>
                                <div className="btnCont">
                                    <button onClick={handleCreateForm}>Create</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 mb-10">
                            <div className="loginImg">
                                <img
                                    className="img-fluid"
                                    src={ASSETS_BASE_URL + '/images/common/onbard.svg'}
                                    alt="login"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const ProfileForm = ({ dataParams, fieldType, handleChange, sendOTPClicked, verifyOTPClicked })=>{
    const { labels, type, value, showError=false, lastVerifiedNo, otpSent, otpVerify, showOtpError, countryName='' } = dataParams;
    const [otp, setOTP] = useState('');
    const showCustomFields = fieldType.includes('country');

    const handleFieldChange = (val, allParams) => {
        if(fieldType.includes('age')){
            let age = parseInt(val, 10);
            if(age>125) return null;
        }else if(fieldType.includes('phone')){
            if(val.length>10) return null;
        }
        let updatedParams = {
            [fieldType]: { ...dataParams, value: val, showError: false }
        }
        if(showCustomFields){
            updatedParams = {
                [fieldType]: { ...dataParams, value: val, showError: false, countryName: allParams.name }
            }
        }
        handleChange(updatedParams);
    }
    const isNumber = fieldType.includes('age');
    if (!labels) return null;
    return (
        <div className="formWrapper">
            {
                type==='phone'?
                <div className={`inpCont ${showError?'showError':''}`}>
                    <input type="number" autoComplete="new-password" placeholder={labels} onChange={(e)=>handleFieldChange(e.target.value)} value={value}/>
                    {
                        showOtpError?<p className="otpMessage">Please verify Mobile No</p>:null
                    }
                    {
                        lastVerifiedNo && lastVerifiedNo==value?
                        <p className="noVerified">Verified Successfully</p>
                        :otpSent?
                        <div className="mg8 p-relative">
                            <input type="number" autoComplete="new-password" placeholder="Enter OTP" onChange={(e)=>setOTP(e.target.value)} value={otp}/>
                            <div className="btnCont sendOtPBtn">
                                <button onClick={()=>verifyOTPClicked(otp)}>Verify OTP</button>
                                <button onClick={sendOTPClicked}>Resend OTP</button>
                            </div>
                        </div>
                        :<div className="btnCont sendOtPBtn">
                            <button onClick={sendOTPClicked}>Send OTP</button>
                        </div>
                    }
                    
                </div>
                :null
            }
            {
                type==='char' && !showCustomFields?                    
                <div className={`inpCont ${showError?'showError':''}`}>
                    {
                        fieldType.includes('date')?
                        <input type="date" autoComplete="new-password" placeholder={labels} onChange={(e)=>handleFieldChange(e.target.value)} value={value}/>
                        :<input type={isNumber?"number":"text"} autoComplete="new-password" placeholder={labels} onChange={(e)=>handleFieldChange(e.target.value)} value={value}/>
                    }
                    {/* <label>{labels}<sup>*</sup></label> */}
                </div>
                :null
            }
            {
                type == 'address' ?
                    <div className={`inpCont ${showError ? 'showError' : ''}`}>
                        <textarea onChange={(e) => handleFieldChange(e.target.value)} value={value} autoComplete="new-password"></textarea>
                    </div>
                    : null
            }
            {
                fieldType.includes('country') ?
                    <SelectMainCountry saveSelectedOption={handleFieldChange} value={countryName} placeholder={`Search ${labels}`} isDesired={fieldType.includes('desired_country')}/>
                    : null
            }
            <p className={showError ? "errorMsg" : "hideMsg"}>Please Fill {labels}</p>
            {/* {
                fieldType=='city'?
                <SelectCity saveSelectedOption={handleFieldChange}/>
                :null
            }
            
            {
                fieldType=='state'?
                <SelectState saveSelectedOption={handleFieldChange}/>
                :null
            } */}
            
        </div>
    )
}

export default CreateProfile;