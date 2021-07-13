import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO } from '@constants/types';

const defaultState = {
    taskListLoading: false,
    taskList: [],
    taskDetail: {}
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
            let newTaskDetail = {[action.taskId]: action.payload}
            newState.taskDetail = Object.assign({}, newState.taskDetail, newTaskDetail);
            console.log(newState.taskDetail);
            return newState
        }

    }
    return state
}