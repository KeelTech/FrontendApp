import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO, GET_USER_PROFILE, LOADING_USER_PROFILE } from '@constants/types';

const defaultState = {
    taskListLoading: false,
    taskList: [],
    taskDetail: {},
    userInfo: {},
    userInfoLoading: false
}

export default function (state = defaultState, action) {

    switch (action.type) {
        
        case TASK_LIST_LOADING:{
            let newState = { ...state}
            newState.taskListLoading = action.payload.status;
            return newState
        }

        case SET_TASK_LIST: {
          let newState = { ...state}
          newState.taskList = action.payload||[];
          return newState
        }

        case TASK_DETAIL_INFO: {
            let newState = { ...state}
            newState.taskDetail = {...newState.taskDetail};
            if(action.taskId){
                newState.taskDetail[action.taskId] = {...action.payload};
            }
            return newState
        }

        case GET_USER_PROFILE: {
            let newState = { ...state}
            newState.userInfo = {...action.payload};
            return newState;
        }

        case LOADING_USER_PROFILE: {
            let newState = { ...state}
            newState.userInfoLoading = action.payload;
            return newState;
        }

    }
    return state
}