import { RESET_AUTH, SAVE_LOGIN_PHONE_NUMBER } from '../../constants/types';

const DUMMY_PROFILE = {
    gender: "m",
    id: 999999,
    is_default_user: true,
    name: "User",
    dob: null,
    isDummyUser: true,
    email:null
}

const defaultState = {
    userObj: {},
}

export default function (state = defaultState, action) {

    switch (action.type) {
        
        case SAVE_LOGIN_PHONE_NUMBER:{
            let newState = { ...state}
            newState.userObj = action.payload
            return newState
        }

    }
    return state
}