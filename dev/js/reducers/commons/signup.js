import {
  SEND_USER_SIGNUP_CREDENTIALS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
} from '../../constants/types';

const defaultState = {
  signUp_credentials_sent: false,
  IsSignedUp: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SEND_USER_SIGNUP_CREDENTIALS: {
      let newState = { ...state };
      newState.signUp_credentials_sent = true;
      return newState;
    }
    case USER_SIGNUP_SUCCESS: {
      let newState = { ...state };
      newState.IsSignedUp = true;
      return newState;
    }
    case USER_SIGNUP_FAIL: {
      let newState = { ...state };
      newState.signUp_credentials_sent = false;
      newState.IsSignedUp = false;
      return newState;
    }
  }
  return state;
}
