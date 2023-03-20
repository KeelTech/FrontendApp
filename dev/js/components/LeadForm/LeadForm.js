import React, { useState, useRef, useEffect, Fragment } from 'react';

import { createLeadSquareLead } from '@actions';
import { LEAD_SQUARED_ACCESS_ID, LEAD_SQUARED_SECRET_KEY, LEAD_SQUARED_X_API } from '@constants';
import CustomToaster from '@components/CustomToaster';
import useOtpVerification from '@/hooks/useOtpVerification.js';
const queryString = require('query-string');

const NumberVerification = (props) => {
    const { handleClose, lead_origin='', isIeltsView=false, search } = props;
    const parsed = queryString.parse(search);
    const utm_medium = parsed.utm_medium ||"";
    const utm_source = parsed.utm_source||"";
    const utm_campaign = parsed.utm_campaign||"";
    const { setOtpData, numberVerified, lastVerifiedNumber, disableSendOtp, sendOTPClicked, verifyOTPClicked, otpToasterInfo } = useOtpVerification();
    const [dataInfo, setDataInfo] = useState({
        number: '',
        otp: '',
        loading: false,
        name: '',
        age: '',
        gender: '',
        email: '',
        state: '',
        city: '',
        ielts: '',
        batch: ''
    })
    const [leadGenerated, setLeadGen] = useState(false);
    const { number, otp, name, age, gender, email, state, city, ielts, batch} = dataInfo;

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false,
        })
    }

    const setData = (val)=>{
        setDataInfo((prevVal)=>{
            return {...prevVal, ...val};
        })
    }

    useEffect(()=>{
        setToasterInfo(otpToasterInfo)
    },[otpToasterInfo])

    const handleNumberInputChange = (e) => {
        const val = e.target.value;
        setOtpData({disableSendOtp: false});
        if (val.length > 10) return null;
        setData({number: val});
        setOtpData({number: val});
    }

    const handleKeyPress = (e) => {
        const key = e.key;
        if (key == 'Enter') {
            sendOTPClicked();
            otpInput.current.focus();
        }
    }

    const handleOtpKeyPress = (e) => {
        const key = e.key;
        if (key == 'Enter') {
            verifyOTPClicked();
            emailRef.current.focus();
        }
    }

    const createLead = ()=>{
        LEAD_SQUARED_ACCESS_ID, LEAD_SQUARED_SECRET_KEY
        if(!name || !age || !email || !gender){
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: true,
                msg: 'Please fill all details'
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }

        if(!numberVerified){
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: true,
                msg: 'Please verify your number'
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }
        const headers = {
            "x-api-key": LEAD_SQUARED_X_API,
            "access-control-allow-origin": "*"
        }
        const payload = [
            {
                "Attribute": "SearchBy",
                "Value": "Phone"
            },
            {
                "Attribute": "FirstName",
                "Value": name
            },
            {
                "Attribute": "EmailAddress",
                "Value": email
            },
            {
                "Attribute": "Phone",
                "Value": lastVerifiedNumber
            },
            {
                "Attribute": "ProspectID",
                "Value": "xxxxxxxx-d168-xxxx-9f8b-xxxx97xxxxxx"
            },
            {
                "Attribute": "mx_Age",
                "Value": age
            },
            {
                "Attribute": "mx_Gender",
                "Value": gender
            },
            {
                "Attribute": "SearchBy",
                "Value": "Phone"
            },
            {
                "Attribute": "lead_origin",
                "Value": lead_origin
            },
            {
                "Attribute": "source",
                "Value": utm_source?utm_source:"WEB"
            },
            {
                "Attribute": "sourceMedium",
                "Value": utm_medium
            },
            {
                "Attribute": "sourceCampaign",
                "Value": utm_campaign
            },
            {
                "Attribute": "mx_City",
                "Value": city
            },
            {
                "Attribute": "mx_State",
                "Value": state
            }
        ]
        if(isIeltsView){
            payload.push({
                "Attribute": "mx_IELTS_Type",
                "Value": ielts
            })

            payload.push({
                "Attribute": "mx_IELTS_Batch_Preference",
                "Value": batch
            });
        }
        const dataParams = {
            accessKey: LEAD_SQUARED_ACCESS_ID,
            secretKey: LEAD_SQUARED_SECRET_KEY,
            payload
        }


        createLeadSquareLead(dataParams, (resp)=>{
            
            setData({
                number: '',
                otp: '',
                loading: false,
                name: '',
                age: '',
                gender: '',
                email: ''
            })
            if(resp && resp.status==1){
                setLeadGen(true);
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Response submitted successfully'
                });
                setTimeout(() => {
                    hideToaster();
                    handleClose();
                }, 2000);
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed to save response, Please try again later'
                });
                setTimeout(() => {
                    hideToaster();
                }, 2000);
            }
            setOtpData({disableSendOtp: false, numberVerified: false, lastVerifiedNumber:''})
        })
    }

    const ageRef = useRef();
    const otpInput = useRef(null);
    const genderRef = useRef(null)
    const emailRef = useRef(null);
    const cityRef = useRef(null);
    const phoneRef = useRef(null);

    return (
        <Fragment>
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
            {
                leadGenerated?<div className="activeLead"></div>:null
            }
            <div className='formSettle'>
                <h3>Don't miss your free call</h3>
                <div className="formInputMain">
                    <div className="inputForm">
                        <input type="text" className={name?"activeInput":''} onChange={(e)=>setData({name: e.target.value})} value={name} onKeyPress={(e)=>{
                            if(e.key ==="Enter"){
                                ageRef.current.focus()
                            }
                        }}/>
                        <label>Full Name</label>
                    </div>
                    <div className='ageGender'>
                        <div className="inputForm">
                            <input type="number" className={age?"activeInput":''} onChange={(e)=>setData({age: e.target.value})} value={age} max="150" ref={ageRef} onKeyPress={(e)=>{
                            if(e.key ==="Enter"){
                                genderRef.current.focus()
                            }
                        }}/>
                            <label>Age</label>
                        </div>
                        <div className='inptSelect'>
                            <select onChange={(e)=>setData({gender: e.target.value})} value={gender} ref={genderRef}>
                                <option value="" disabled selected>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className='ageGender'>
                        <div className="inputForm">
                            <input type="text" className={state?"activeInput":''} onChange={(e)=>setData({state: e.target.value})} value={state} max="150" onKeyPress={(e)=>{
                            if(e.key ==="Enter"){
                                cityRef.current.focus()
                            }
                        }}/>
                            <label>State</label>
                        </div>
                        <div className="inputForm">
                            <input type="text" className={city?"activeInput":''} onChange={(e)=>setData({city: e.target.value})} value={city} max="150" ref={cityRef} onKeyPress={(e)=>{
                            if(e.key ==="Enter"){
                                phoneRef.current.focus()
                            }
                        }}/>
                            <label>City</label>
                        </div>
                    </div>

                    {
                        isIeltsView?
                        <div className='ageGender'>
                            <div className='inptSelect'>
                                <select onChange={(e)=>setData({ielts: e.target.value})} value={ielts}>
                                    <option value="" disabled selected>IELTS</option>
                                    <option value="IELTS Academic">IELTS Academic</option>
                                    <option value="IELTS General">IELTS General</option>
                                </select>
                            </div>
                            <div className='inptSelect'>
                                <select onChange={(e)=>setData({batch: e.target.value})} value={batch}>
                                    <option value="" disabled selected>Select your batch</option>
                                    <option value="Weekday">Weekday</option>
                                    <option value="Weekend">Weekend</option>
                                </select>
                            </div>
                        </div>
                        :null
                    }

                    <div className="inputForm mobileInp inputWithOtp">
                        <input type="number" ref={phoneRef} className={number?"activeInput":''} onChange={handleNumberInputChange} value={number} onKeyPress={handleKeyPress} />
                        <label className={number ? 'fillInput' : ''}>Contact Number</label>
                        <img className="img-fluid" src={ASSETS_BASE_URL + '/images/common/ind.svg'} alt="mobile"/>
                        <button className={`${disableSendOtp?'disableOtp':''} 'vryFy'`} onClick={sendOTPClicked}>Send OTP</button>
                    </div>
                    <div className="inputForm OTPInput">
                        <input type="number" disabled={numberVerified} className={otp?"activeInput":''} onChange={(e) => {
                            setData({otp: e.target.value})
                            setOtpData({otp: e.target.value});
                            }} value={otp} ref={otpInput} onKeyPress={handleOtpKeyPress}/>
                        <label className={otp ? 'fillInput' : ''}>OTP</label>
                        {
                            numberVerified?<button className='vryFy hideCursor'>Verified</button>:<button onClick={verifyOTPClicked} className='vryFy'>Verify</button>
                        }
                    </div>
                    <div className="inputForm">
                        <input type="email" className={email?"activeInput":''} value={email} onChange={(e)=>setData({email: e.target.value})} ref={emailRef} onKeyPress={(e)=>{
                            if(e.key ==="Enter"){
                                createLead()
                            }
                        }}/>
                        <label>Email</label>
                    </div>
                    <button className="submitBtn" onClick={createLead}>Send</button>
                </div>
            </div>

        </Fragment>
    )
}

export default NumberVerification;