import { RESET_AUTH, SEND_OTP_REQUEST, SEND_OTP_SUCCESS, SEND_OTP_FAIL, SUBMIT_OTP_REQUEST, SUBMIT_OTP_SUCCESS, SUBMIT_OTP_FAIL, SAVE_LOGIN_PHONE_NUMBER } from '../../constants/types';
import { API_GET, API_POST } from '../../api/api.js';
import STORAGE from '../../helpers/storage'
// import NAVIGATE from '../../helpers/navigate'
import SnackBar from 'node-snackbar'
import CONFIG from '../../config/config.js'


export const sendOTP = (number, messageType, cb) => (dispatch) => {
    dispatch({
        type: SEND_OTP_REQUEST,
        payload: {
            messageType: messageType
        }
    })
    API_POST('/login/sendOtp', 
    { 
        "mobileNo":number
    }
    ).then(function (response) {
        if(response && response.statusCode == 1){
            SnackBar.show({ pos: 'bottom-center', text: "OTP Sent Successfuly." });
            dispatch({
                type: SEND_OTP_SUCCESS,
                payload: {
                    phoneNumber: number,
                }
            })
            if (cb) cb(null, response);
        }
        
    }).catch(function (error) {
        let message = "Cannot generate OTP."
        dispatch({
            type: SEND_OTP_FAIL,
            payload: {
                error_message: message
            }
        })
        if (cb) cb(message, null);
    })

}

export const submitOTP = (number, otp, cb) => (dispatch) => {
    dispatch({
        type: SUBMIT_OTP_REQUEST,
        payload: {}
    })

    API_POST('/otp/verifyotp', {
        "mobileNo": number,
        "otp": otp
    }).then(function (response) {
        // set cookie token explicitly, csrf token is set by default
        if(response.statusCode == 1){
            STORAGE.setAuthToken(response.cid)
            STORAGE.setPhoneNumber(number)
            dispatch({
                type: SUBMIT_OTP_SUCCESS,
                payload: { cid: response.customerId, number: number }
            })
            if (cb) cb(null, response);
        }
        else{
            dispatch({
                type: SUBMIT_OTP_FAIL,
                payload: {
                    error_message: response ? response.statusMsg : "Invalid Login"
                }
            })
            SnackBar.show({ pos: 'bottom-center', text: "Please Try Again" });
            // if (cb) cb();
        }
        

    }).catch(function (error) {
        dispatch({
            type: SUBMIT_OTP_FAIL,
            payload: {
                error_message: "Invalid OTP"
            }
        })
        if (cb) cb(error, null);
    })
}



export const resetAuth = () => (dispatch) => {
    STORAGE.deleteAuth()
    dispatch({
        type: RESET_AUTH,
        payload: {}
    })
}

