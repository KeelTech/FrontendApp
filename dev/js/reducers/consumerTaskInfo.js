import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO, GET_USER_PROFILE, LOADING_USER_PROFILE, GET_FULL_USER_PROFILE, LOADING_FULL_USER_PROFILE, UPDATE_USER_PROFILE, SAVE_PLACE_INFO, SET_ACTIVE_TASK, CASE_DETAIL_LOADING, CASE_DETAILS, CALENDLY_URL_LOADING, FETCH_CALENDLY_URL, GET_SCHEDULE_DETAIL, FETCH_COUNTRY_LIST, GET_PLAN_COMPONENT, FETCH_NOTIFICATION, TOGGLE_NOTIFICATION_CHAT, NOTIFICATION_LOADING, CURRENT_VISIBLE_NOTIFICATION } from '@constants/types';

const defaultState = {
    taskListLoading: false,
    taskList: [],
    taskDetail: {},
    userInfo: {},
    userInfoLoading: false,
    fullProfileInfo: {},
    originalFullProfileInfo: {},
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
    scheduleList: [],
    countryList: [],
    planComponents: [],
    planLoaded: false,
    notificationList: [],
    showNotificationChatWidget: false,
    notificationLoading: false,
    recentNotification:{},
    lastVisibleNotification: ''
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
            newState.originalFullProfileInfo = action.payload;
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
            const { type, data, isMultiple, subIndex, isUpdate, activeTabType } = action.payload;
            newState.fullProfileInfo[activeTabType] = {...newState.fullProfileInfo[activeTabType]};
            if(isUpdate){
                newState.fullProfileInfo[activeTabType][type] = [...data];
            }else if(isMultiple){
                const updatedList = newState.fullProfileInfo[activeTabType][type].map((subItem, key)=>{
                    if(key==subIndex){
                        return {...subItem, ...data};
                    }
                    return subItem;
                })
                newState.fullProfileInfo[activeTabType][type] = updatedList;
            }else{
                newState.fullProfileInfo[activeTabType][type] = {...newState.fullProfileInfo[activeTabType][type], ...data};
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
        case 'RESET_USER_INFO': {
            let newState = { ...state}
            newState.userInfo = {};
            newState.planLoaded = false;
            return newState;
        }
        case FETCH_COUNTRY_LIST: {
            let newState = {...state};
            newState.countryList = action.payload;
            return newState;
        }
        case GET_PLAN_COMPONENT: {
            let newState = {...state};
            newState.planComponents = action.payload;
            newState.planLoaded = true;
            return newState;
        }
        case FETCH_NOTIFICATION: {
            let newState = {...state};
            if(action.isRecent){
                newState.recentNotification = action.payload;
            }else{
                newState.notificationList = action.payload;
            }
            return newState;
        }
        case TOGGLE_NOTIFICATION_CHAT: {
            let newState = {...state};
            newState.showNotificationChatWidget = action.payload;
            return newState;
        }
        case NOTIFICATION_LOADING:{
            let newState = {...state};
            newState.notificationLoading = action.payload;
            return newState;
        }
        case CURRENT_VISIBLE_NOTIFICATION: {
            let newState = {...state};
            newState.lastVisibleNotification = action.payload;
            return newState;
        }
    }
    return state
}