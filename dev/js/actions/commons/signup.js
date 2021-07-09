import {
  SEND_USER_SIGNUP_CREDENTIALS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
} from '../../constants/types';
import { API_POST } from '../../api/api.js';
import STORAGE from '@helpers/storage/storage.js';

export const userSignUp = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_SIGNUP_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + 'v1/user/signup', {
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
        STORAGE.setAuthToken(response.message.token);
        let message = 'User Signed Up Successfully';
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: {
            signUp_message: message,
          },
        });
        if (cb) cb(null, response);
      } else {
        let message = 'Failing to sign up the user';
        dispatch({
          type: USER_SIGNUP_FAIL,
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
        type: USER_SIGNUP_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};
