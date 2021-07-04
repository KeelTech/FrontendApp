import {
  SEND_USER_SIGNUP_CREDENTIALS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
} from '../../constants/types';
import { API_POST } from '../../api/api.js';

export const userSignUp = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_SIGNUP_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST('https://getkeel.com/api/v1/user/signup', {
    email: data.email,
    password: data.password,
  })
    .then(function (response) {
      if (response && response.status == 1) {
        dispatch({
          type: SEND_USER_SIGNUP_CREDENTIALS,
          payload: {
            loading: false,
          },
        });
        if (cb) cb(null, response);
      }
    })
    .then(function () {
      let message = 'User Signed Up Successfully';
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: {
          signUp_message: message,
        },
      });
    })
    .catch(function (error) {
      let message = 'Error Signing up';
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};
