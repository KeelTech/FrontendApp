import {
  SEND_USER_LOGIN_CREDENTIALS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from '../../constants/types';
import { API_POST } from '../../api/api.js';

export const userLogin = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_LOGIN_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST('https://getkeel.com/api/v1/user/login', {
    email: data.email,
    password: data.password,
  })
    .then(function (response) {
      if (response && response.status == 1) {
        dispatch({
          type: SEND_USER_LOGIN_CREDENTIALS,
          payload: {
            loading: false,
          },
        });
        if (cb) cb(null, response);
      }
    })
    .then(function () {
      let message = 'User Logged In Successfully';
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          login_message: message,
        },
      });
    })
    .catch(function (error) {
      let message = 'Error Logging In';
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};
