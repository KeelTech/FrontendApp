import {
  SEND_USER_LOGIN_CREDENTIALS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  AGENT_LOGIN_SUCCESS,
  USER_SIGNUP_LOGIN_SUCCESS,
  LOGOUT_USER
} from '../../constants/types';

const defaultState = {
  login_credentials_sent: false,
  IsloggedIn: false,
  isAgent: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SEND_USER_LOGIN_CREDENTIALS: {
      let newState = { ...state };
      newState.login_credentials_sent = true;
      return newState;
    }
    case USER_LOGIN_SUCCESS: {
      let newState = { ...state };
      newState.IsloggedIn = true;
      return newState;
    }
    case USER_LOGIN_FAIL: {
      let newState = { ...state };
      newState.login_credentials_sent = false;
      newState.IsloggedIn = false;
      return newState;
    }
    case AGENT_LOGIN_SUCCESS: {
      let newState = { ...state };
      newState.isAgent = true;
      newState.IsloggedIn = true;
      return newState;
    }
    case USER_SIGNUP_LOGIN_SUCCESS :{
      let newState = { ...state };
      newState.IsloggedIn = true;
      return newState;
    }
    case LOGOUT_USER: {
      let newState = { ...state };
      newState.isAgent = false;
      newState.IsloggedIn = false;
      return newState;
    }
  }
  return state;
}
