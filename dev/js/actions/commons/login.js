import {
  SEND_USER_LOGIN_CREDENTIALS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from '../../constants/types';
import { API_POST } from '../../api/api.js';
import STORAGE from '@helpers/storage/storage.js';

export const userLogin = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_LOGIN_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + '/v1/user/login', {
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
        STORAGE.setAuthToken(response.message.token).then((resolve)=>{
          if (cb) cb(null, response);
        });
        const message = 'Successfully Logged In';
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: {
            login_message: message,
          },
        });
      } else {
        let message = 'Failing to log in the user';
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: {
            error_message: message,
          },
        });
        if (cb) cb(message, null);
      }
    })
    .catch(function (error) {
      let message = error.non_field_errors[0];
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};

export const googleLogin = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_LOGIN_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + '/v1/user/google-login', {
    access_token: data.accessToken,
  })
    .then(function (response) {
      if (response && response.status == 1) {
        dispatch({
          type: SEND_USER_LOGIN_CREDENTIALS,
          payload: {
            loading: false,
          },
        });
        STORAGE.setAuthToken(response.message.token);
        const message = 'Successfully Logged In';
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: {
            login_message: message,
          },
        });
        if (cb) cb(null, response);
      } else {
        let message = 'Failing to log in the user';
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: {
            error_message: message,
          },
        });
        if (cb) cb(message, null);
      }
    })
    .catch(function (error) {
      let message = error.non_field_errors[0];
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};

export const linkedinLogin = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_LOGIN_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + '/v1/user/linkedin-login', {
    access_token: data.code,
  })
    .then(function (response) {
      if (response && response.status == 1) {
        dispatch({
          type: SEND_USER_LOGIN_CREDENTIALS,
          payload: {
            loading: false,
          },
        });
        STORAGE.setAuthToken(response.message.token);
        const message = 'Successfully Logged In';
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: {
            login_message: message,
          },
        });
        if (cb) cb(null, response);
      } else {
        let message = 'Failing to log in the user';
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: {
            error_message: message,
          },
        });
        if (cb) cb(message, null);
      }
    })
    .catch(function (error) {
      let message = error.non_field_errors[0];
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};

export const facebookLogin = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_LOGIN_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + '/v1/user/facebook-login', {
    access_token: data.accessToken,
  })
    .then(function (response) {
      if (response && response.status == 1) {
        dispatch({
          type: SEND_USER_LOGIN_CREDENTIALS,
          payload: {
            loading: false,
          },
        });
        STORAGE.setAuthToken(response.message.token);
        const message = 'Successfully Logged In';
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: {
            login_message: message,
          },
        });
        if (cb) cb(null, response);
      } else {
        let message = 'Failing to log in the user';
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: {
            error_message: message,
          },
        });
        if (cb) cb(message, null);
      }
    })
    .catch(function (error) {
      let message = error.non_field_errors[0];
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};
