import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO, CASE_DETAIL_LOADING, CASE_DETAILS} from '@constants/types';

const defaultState = {
    taskListLoading: false,
    taskList: [],
    taskDetail: {},
    caseDetailLoading: false,
    caseDetails: {}
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
                newState.taskDetail[action.taskId] = {};
                //JSON.parse(JSON.stringify(action.payload));
                newState.taskDetail[action.taskId] = {...action.payload, tasks_comment: [...action.payload.tasks_comment]};
            }
            return newState
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

    }
    return state
}