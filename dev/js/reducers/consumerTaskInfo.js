import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO, GET_USER_PROFILE, LOADING_USER_PROFILE, GET_FULL_USER_PROFILE, LOADING_FULL_USER_PROFILE, UPDATE_USER_PROFILE, SAVE_PLACE_INFO, SET_ACTIVE_TASK, CASE_DETAIL_LOADING, CASE_DETAILS, CALENDLY_URL_LOADING, FETCH_CALENDLY_URL, GET_SCHEDULE_DETAIL } from '@constants/types';

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
    },
    activeTask: '',
    caseDetailLoading: false,
    caseDetails: {},
    calendlyUrlLoading: false,
    calendlyURL: '',
    scheduleList: []
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

        case SET_ACTIVE_TASK: {
            let newState = {...state};
            newState.activeTask = action.payload;
            return newState;
        }
        case CASE_DETAIL_LOADING: {
            let newState = { ...state}
            newState.caseDetailLoading = action.payload;
            return newState;
        }

        case CASE_DETAILS: {
            let newState = {...state}
            newState.caseDetails = action.payload||{};
            return newState;
        }

        case CALENDLY_URL_LOADING: {
            let newState = {...state}
            newState.calendlyUrlLoading = action.payload||{};
            return newState;
        }
        
        case FETCH_CALENDLY_URL:{
            let newState = {...state}
            newState.calendlyURL = action.payload||{};
            return newState;
        }

        case GET_SCHEDULE_DETAIL: {
            let newState = {...state}
            newState.scheduleList = action.payload||[];
            return newState;
        }

    }
    return state
}