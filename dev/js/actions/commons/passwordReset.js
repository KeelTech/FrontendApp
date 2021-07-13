import {
  SEND_RESET_PASSWORD_CREDENTIALS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from '../../constants/types';
import { API_POST } from '../../api/api.js';

export const resetPassword = (data, dispatch, cb) => {
  dispatch({
    type: SEND_RESET_PASSWORD_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + '/v1/user/confirm-password', {
    reset_token: data.otp,
    password: data.password,
  })
    .then(function (response) {
      if (response && response.status == 1) {
        dispatch({
          type: SEND_RESET_PASSWORD_CREDENTIALS,
          payload: {
            loading: false,
          },
        });
        const message = 'Password has been successfully reset';
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: {
            login_message: message,
          },
        });
        if (cb) cb(null, response);
      } else {
        let message = 'Failing to reset the password';
        dispatch({
          type: RESET_PASSWORD_FAIL,
          payload: {
            error_message: message,
          },
        });
        if (cb) cb(message, null);
      }
    })
    .catch(function (error) {
      let message = error.message;
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};
