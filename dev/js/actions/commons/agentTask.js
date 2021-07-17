import { TASK_LIST_LOADING } from '@constants/types';
import { API_GET, API_POST } from '../../api/api.js';

export const createTask = (dataParams, dispatch, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/tasks/create`, {
        ...dataParams
    }).then((response)=>{
        console.log(response);
        if(cb)cb(data, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}


export const getCaseList = (dataParams={}, dispatch, cb=null)=>{
    API_GET(`${API_BASE_URL}/v1/cases/list-cases`).then((response)=>{
        if(cb)cb(data, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}