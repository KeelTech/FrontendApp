import {
  SEND_USER_LOGIN_CREDENTIALS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  SEND_USER_LOGIN_RESET_CREDENTIALS,
  USER_LOGIN_RESET_FAIL,
  USER_LOGIN_RESET_SUCCESS,
  AGENT_LOGIN_SUCCESS
} from '../../constants/types';
import { API_POST, API_GET } from '../../api/api.js';
import STORAGE from '@helpers/storage/storage.js';

export const userLogin = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_LOGIN_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + '/v1/user/customer-login', {
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
        STORAGE.setAuthToken(response.message.token).then((resolve) => {
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

export const userLoginWithEmail = (data, dispatch, cb) => {
  const {email} = data;
  dispatch({
    type: SEND_USER_LOGIN_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_GET(`${API_BASE_URL}/v1/user/new-user-from-get?email=${email}`)
    .then(function (response) {
      if (response && response.message && response.message.token) {
        dispatch({
          type: SEND_USER_LOGIN_CREDENTIALS,
          payload: {
            loading: false,
          },
        });
        STORAGE.setAuthToken(response.message.token).then((resolve) => {
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

// export const linkedinLogin = (data, dispatch, cb) => {
//   dispatch({
//     type: SEND_USER_LOGIN_CREDENTIALS,
//     payload: {
//       loading: true,
//     },
//   });
//   API_POST(API_BASE_URL + '/v1/user/linkedin-login', {
//     access_token: data.code,
//   })
//     .then(function (response) {
//       if (response && response.status == 1) {
//         dispatch({
//           type: SEND_USER_LOGIN_CREDENTIALS,
//           payload: {
//             loading: false,
//           },
//         });
//         STORAGE.setAuthToken(response.message.token);
//         const message = 'Successfully Logged In';
//         dispatch({
//           type: USER_LOGIN_SUCCESS,
//           payload: {
//             login_message: message,
//           },
//         });
//         if (cb) cb(null, response);
//       } else {
//         let message = 'Failing to log in the user';
//         dispatch({
//           type: USER_LOGIN_FAIL,
//           payload: {
//             error_message: message,
//           },
//         });
//         if (cb) cb(message, null);
//       }
//     })
//     .catch(function (error) {
//       let message = error.non_field_errors[0];
//       dispatch({
//         type: USER_LOGIN_FAIL,
//         payload: {
//           error_message: message,
//         },
//       });
//       if (cb) cb(message, null);
//     });
// };

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

export const resetPasswordLink = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_LOGIN_RESET_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + '/v1/user/reset-password', {
    email: data.email,
  })
    .then(function (response) {
      if (response && response.status == 1) {
        dispatch({
          type: SEND_USER_LOGIN_RESET_CREDENTIALS,
          payload: {
            loading: false,
          },
        });
        // const message = 'Successfully sent the user email';
        // dispatch({
        //   type: USER_LOGIN_RESET_SUCCESS,
        //   payload: {
        //     login_message: message,
        //   },
        // });
        if (cb) cb(null, response);
      } else {
        let message = 'Failing to send user email address';
        dispatch({
          type: USER_LOGIN_RESET_FAIL,
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
        type: USER_LOGIN_RESET_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};

export const agentLogin = (data, dispatch, cb) => {
  dispatch({
    type: SEND_USER_LOGIN_CREDENTIALS,
    payload: {
      loading: true,
    },
  });
  API_POST(API_BASE_URL + '/v1/user/agent-login', {
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
        STORAGE.setAuthToken(response.message.token).then((resolve) => {
          if (cb) cb(null, response);
        });
        const message = 'Successfully Logged In';
        dispatch({
          type: AGENT_LOGIN_SUCCESS,
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

export const sendOTP = (dataParams, dispatch, cb=null)=>{
  API_POST(`${API_BASE_URL}/v1/user/otp/generate`,
      dataParams
  ).then((response)=>{
      if(cb)cb(response, null);
  }).catch((e)=>{
      if(cb)cb(null, true);
  })
}

export const verifyOTP = (dataParams, dispatch, cb=null)=>{
  API_POST(`${API_BASE_URL}/v1/user/otp/verify`,
      dataParams
  ).then((response)=>{
      if(cb)cb(response, null);
  }).catch((e)=>{
      if(cb)cb(null, true);
  })
}

export const logoutUser = (dataParams, dispatch, cb=null)=>{
  API_GET(`${API_BASE_URL}/v1/user/logout`).then((response)=>{
      if(cb)cb(response, null);
  }).catch((e)=>{
      if(cb)cb(null, true);
  })
}