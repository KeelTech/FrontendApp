import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO, GET_USER_PROFILE, LOADING_USER_PROFILE, GET_FULL_USER_PROFILE, LOADING_FULL_USER_PROFILE, UPDATE_USER_PROFILE, SAVE_PLACE_INFO } from '@constants/types';

const defaultState = {
    taskListLoading: false,
    taskList: [],
    taskDetail: {},
    userInfo: {},
    userInfoLoading: false,
    fullProfileInfo: {},
    fullProfileLoading: false,
    placeInfo: {
        city: '',
        state: '',
        country: ''
    }
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

        case GET_FULL_USER_PROFILE: {
            let newState = { ...state}
            newState.fullProfileInfo = action.payload;
            return newState;
        }

        case LOADING_FULL_USER_PROFILE: {
            let newState = { ...state}
            newState.fullProfileLoading = action.payload;
            return newState;
        }

        case UPDATE_USER_PROFILE: {
            let newState = { ...state}
            newState.fullProfileInfo = {...newState.fullProfileInfo};
            const { type, data, isMultiple, subIndex, isUpdate } = action.payload;
            if(isUpdate){
                newState.fullProfileInfo[type] = [...data];
            }else if(isMultiple){
                const updatedList = newState.fullProfileInfo[type].map((subItem, key)=>{
                    if(key==subIndex){
                        return {...subItem, ...data};
                    }
                    return subItem;
                })
                newState.fullProfileInfo[type] = updatedList;
            }else{
                newState.fullProfileInfo[type] = {...newState.fullProfileInfo[type], ...data};
            }
            return newState;
        }

        case SAVE_PLACE_INFO: {
            let newState = {...state};
            newState.placeInfo = {...newState.placeInfo, ...action.payload};
            return newState;
        }
    }
    return state
}