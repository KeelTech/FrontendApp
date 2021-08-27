import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, getUserProfile, sendOTP, verifyOTP } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import CustomToaster from '@components/CustomToaster';
import { SelectCountry } from '@components/SelectCity';
import { container, progressBar } from './style.js';

const CreateProfile = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const taskInfo = useSelector(state=>state.TASK_INFO);
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
            type: "char"
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

    const handleCreateForm = ()=>{
        const postParams={};
        let isError = false;
        let newDataParams = {};
        Object.entries(dataParams).map((val, key)=>{
            const [fieldType, dataValues] = val;
            const { value, type, lastVerifiedNo } = dataValues;
            postParams[fieldType] = value;
            let showError = false;
            let otpVerify = false;
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
            newDataParams[fieldType]= {...dataValues, showError, otpVerify }
        })
        if(isError){
            setDataParams(newDataParams);
            return;
        };
        setLoading(true);
        createProfile(postParams, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp){
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Profile Created Successfully'
                });
                window.location.href = window.location.origin;
                //getUserProfile({}, dispatch);
            }else{
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

    const handleChange = (val)=>{
        setDataParams((oldState)=>{
            return {...oldState, ...val}
        })
    }
    

    const hideToaster = ()=>{
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
        <div className={container}>
            {
                loading?<div className={loaderView}><LoadingWidget/></div>:null
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
            <div className={progressBar}>
            <div className="desktopProgressBar">
                <div className="userFormsMainContainer">
                    <div className="formsScroll">
                        {
                            Object.entries(dataParams).map((val, key)=>{
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
        </div>
        </div>
    )
}

const ProfileForm = ({ dataParams, fieldType, handleChange, sendOTPClicked, verifyOTPClicked })=>{
    const { labels, type, value, showError=false, lastVerifiedNo, otpSent, otpVerify } = dataParams;
    const [otp, setOTP] = useState('');

    const handleFieldChange = (val)=>{
        let updatedParams = {
            [fieldType]: {...dataParams, value: val, showError: false}
        }
        handleChange(updatedParams);
    }

    if(!labels) return null;
    const showCustomFields = fieldType.includes('country');
    return(
        <div className="formWrapper">
            <label>{labels}<sup>*</sup></label>
            {
                type==='phone'?
                <div className={`inpCont ${showError?'showError':''}`}>
                    <input type="number" autoComplete="new-password" placeholder={labels} onChange={(e)=>handleFieldChange(e.target.value)} value={value}/>
                    {
                        otpVerify?null:<p className="otpMessage">Please verify Mobile No</p>
                    }
                    {
                        lastVerifiedNo && lastVerifiedNo==value?
                        <p className="noVerified">*Phone No Verified</p>
                        :otpSent?
                        <div className="mg8">
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
                        :<input type="text" autoComplete="new-password" placeholder={labels} onChange={(e)=>handleFieldChange(e.target.value)} value={value}/>
                    }
                </div>
                :null
            }
            {
                type=='address'?
                <div className={`inpCont ${showError?'showError':''}`}>
                    <textarea onChange={(e)=>handleFieldChange(e.target.value)} value={value} placeholder={labels} autoComplete="new-password"></textarea>
                </div>
                :null
            }
            {
                fieldType.includes('country')?
                <SelectCountry saveSelectedOption={handleFieldChange}/>
                :null
            }
            <p className={showError?"errorMsg":"hideMsg"}>Please Fill {labels}</p>
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