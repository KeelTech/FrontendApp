import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO } from '@constants/types';
import { API_POST, API_GET } from '../../api/api.js';
import STORAGE from '@helpers/storage/storage.js';

export const getTaskList = (dataParams, dispatch, cb=null)=>{
    const status = dataParams.status;
    const caseId = dataParams.case||''
    dispatch({
        type: TASK_LIST_LOADING,
        payload: {
            status: true
        }
    })
    API_GET(`${API_BASE_URL}/v1/tasks/list?status=${status}&case=${caseId}`).then((response)=>{
        dispatch({
            type: TASK_LIST_LOADING,
            payload: {
                status: false
            }
        })
        dispatch({
            type: SET_TASK_LIST,
            payload: response && response.data||[]
        })
        if(cb)cb(response.data, null);
    }).catch((e)=>{
        dispatch({
            type: TASK_LIST_LOADING,
            payload: {
                status: false
            }
        })
    })
}

export const getTaskDetail = (dataParams, dispatch, cb=null)=>{
    const { taskId } = dataParams;
    API_GET(`${API_BASE_URL}/v1/tasks/taskDetails/${taskId}`).then((response)=>{
        dispatch({
            type: TASK_DETAIL_INFO,
            payload: response && response.data||{},
            taskId
        })
        if(cb)cb(data, null);
    }).catch((e)=>{
        
    })
}