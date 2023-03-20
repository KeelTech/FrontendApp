import { useState } from 'react';
import { sendOTP, verifyOTP } from '@actions';

const OtpVerification = ()=>{

    const [dataInfo, setDataInfo] = useState({
        number: '',
        otp: '',
        numberVerified: false,
        lastVerifiedNumber: '',
        disableSendOtp: false,
        sendOtpSuccess: false,
        sendOtpError: false
    })

    const { number, otp, numberVerified, lastVerifiedNumber, disableSendOtp } = dataInfo;

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    const setData = (val)=>{
        setDataInfo((prevVal)=>{
            return {...prevVal, ...val};
        })
    }
    
    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
        })
    }

    const sendOTPClicked = () => {
        if(disableSendOtp) return;
        const postParams = {
            phone_number: number
        }
        if (!number) {
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
        setData({disableSendOtp: true});
        sendOTP(postParams, (resp, err) => {
            setData({loading: false});
            if (resp) {
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'OTP Sent Successfully'
                });
            } else {
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed To Sent OTP'
                });
                setData({disableSendOtp: true});
            }
            setTimeout(() => {
                hideToaster();
            }, 1000);
        })
    }

    const verifyOTPClicked = () => {
        const postParams = {
            otp,
            phone_number: number
        }
        if (!otp) {
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
        setData({loading: true});
        verifyOTP(postParams, null, (resp, err) => {
            setData({loading: false});
            if (resp && resp.data.includes('validated')) {
                setData({
                    lastVerifiedNumber: number,
                    numberVerified: true
                })
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'OTP Verified Successfully'
                });
            } else {
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed To Verify OTP'
                });
            }
        })
    }

    return {
        setOtpData: setData,
        numberVerified,
        lastVerifiedNumber,
        disableSendOtp,
        sendOTPClicked,
        verifyOTPClicked,
        otpToasterInfo: toasterInfo
    }

}

export default OtpVerification