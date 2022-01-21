import { ADD_CASE_LIST, CASE_LIST_LOADING, FETCH_AGENT_PROFILE, AGENT_PROFILE_LOADING, AGENT_SCHEDULE_DETAILS, AGENT_SCHEDULE_LOADING, FETCH_TEMPLATE_LIST, FETCH_TEMPLATE_LIST_LOADING } from '@constants/types';

const defaultState = {
    caseListLoading: false,
    caseList: [],
    agentProfileLoading: false,
    agentProfile: {},
    agentScheduleLoading: false,
    agentScheduleDetails: [],
    templateList: [],
    templateListLoading: false
}

export default function (state = defaultState, action) {

    switch (action.type) {
        
        case CASE_LIST_LOADING:{
            let newState = { ...state}
            newState.caseListLoading = action.payload;
            return newState
        }

        case ADD_CASE_LIST: {
          let newState = { ...state}
          newState.caseList = action.payload||[];
          return newState
        }
        
        case AGENT_PROFILE_LOADING: {
            let newState = { ...state}
            newState.agentProfileLoading = action.payload;
            return newState
        }
        
        case FETCH_AGENT_PROFILE : {
            let newState = { ...state}
            newState.agentProfile = action.payload||[];
            return newState
        }

        case 'RESET_AGENT_PROFILE' : {
            let newState = { ...state}
            newState.agentProfile = {};
            return newState
        }

        case AGENT_SCHEDULE_LOADING: {
            let newState = { ...state}
            newState.agentScheduleLoading = action.payload;
            return newState
        }

        case AGENT_SCHEDULE_DETAILS: {
            let newState = { ...state}
            newState.agentScheduleDetails = action.payload;
            return newState
        }

        case FETCH_TEMPLATE_LIST_LOADING: {
            let newState = { ...state}
            newState.templateListLoading = action.payload;
            return newState
        }
        case FETCH_TEMPLATE_LIST: {
            let newState = { ...state}
            newState.templateList = action.payload;
            return newState
        }
    }
    return state
}