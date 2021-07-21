import { ADD_CASE_LIST, CASE_LIST_LOADING } from '@constants/types';
import { API_GET, API_POST, API_PUT } from '../../api/api.js';

export const createTask = (dataParams, dispatch, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/tasks/create`, {
        ...dataParams
    }).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const updateTask = (dataParams, dispatch, cb=null)=>{
    const { task_id } = dataParams;
    API_PUT(`${API_BASE_URL}/v1/tasks/edit/${task_id}`, {
        ...dataParams
    }).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getCaseList = (dataParams={}, dispatch, cb=null)=>{
    dispatch({
        type: CASE_LIST_LOADING,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/cases/list-cases`).then((response)=>{
        dispatch({
            type: CASE_LIST_LOADING,
            payload: false
        })
        if(response && response.status==1){
            dispatch({
                type: ADD_CASE_LIST,
                payload: response.message
            })
        }else{
            if(cb)cb(null, true);    
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
        dispatch({
            type: CASE_LIST_LOADING,
            payload: false
        })
    })
}