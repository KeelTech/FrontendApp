import { ADD_CASE_LIST, CASE_LIST_LOADING, FETCH_AGENT_PROFILE, AGENT_PROFILE_LOADING } from '@constants/types';
import { API_GET, API_POST, API_PUT, API_DELETE } from '../../api/api.js';

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

export const createComment = (dataParams, dispatch, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/tasks/comments/create`, {
        ...dataParams
    }).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const deleteComment = (dataParams, dispatch, cb=null)=>{
    const commentId = dataParams.commentId;
    API_DELETE(`${API_BASE_URL}/v1/tasks/comments/${commentId}`, {
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

export const updateCurrentTaskStatus = (dataParams, dispatch, cb=null)=>{
    const { task_id } = dataParams;
    API_PUT(`${API_BASE_URL}/v1/tasks/taskStatus/${task_id}`, {
        ...dataParams
    }).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getAgentDetails = (dataParams={}, dispatch, cb=null)=>{
    API_GET(`${API_BASE_URL}v1/user/item-count`).then((response)=>{
        if(response && response.data){
            if(cb)cb(response.data, false);
        }else{
            if(cb)cb(null, true);    
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const deleteTaskInfo = (dataParams, dispatch, cb=null)=>{
    const taskId = dataParams.taskId;
    API_DELETE(`${API_BASE_URL}/v1/tasks/delete/${taskId}`, {
        ...dataParams
    }).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getAgentProfile = (dataParams={}, dispatch, cb=null)=>{
    dispatch({
        type: AGENT_PROFILE_LOADING,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/user/get-agent-profile`).then((response)=>{
        dispatch({
            type: AGENT_PROFILE_LOADING,
            payload: false
        })
        dispatch({
            type: FETCH_AGENT_PROFILE,
            payload: response && response.message||{}
        })
        if(cb)cb(response, null);
    }).catch((e)=>{
        dispatch({
            type: AGENT_PROFILE_LOADING,
            payload: false
        })
        if(cb)cb(null, true);
    })
}