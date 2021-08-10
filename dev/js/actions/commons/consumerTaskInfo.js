import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO, GET_USER_PROFILE, LOADING_USER_PROFILE, GET_FULL_USER_PROFILE, LOADING_FULL_USER_PROFILE, UPDATE_USER_PROFILE } from '@constants/types';
import { API_POST, API_GET } from '../../api/api.js';

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
        if(cb)cb(true, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getUserProfile = (dataParams={}, dispatch, cb=null)=>{
    dispatch({
        type: LOADING_USER_PROFILE,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/user/get-profile`).then((response)=>{
        dispatch({
            type: GET_USER_PROFILE,
            payload: response && response.message||{},
        })
        dispatch({
            type: LOADING_USER_PROFILE,
            payload: false
        })
        if(cb)cb(true, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
        dispatch({
            type: LOADING_USER_PROFILE,
            payload: false
        })
    })
}

export const getFullUserProfile = (dataParams={}, dispatch, cb=null)=>{
    dispatch({
        type: LOADING_FULL_USER_PROFILE,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/user/get-full-profile`).then((response)=>{
        dispatch({
            type: GET_FULL_USER_PROFILE,
            payload: response && response.message||{},
        })
        dispatch({
            type: LOADING_FULL_USER_PROFILE,
            payload: false
        })
        if(cb)cb(true, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
        dispatch({
            type: LOADING_FULL_USER_PROFILE,
            payload: false
        })
    })
}

export const updateUserProfile = (dataParams={}, dispatch)=>{
    const { data, type } = dataParams;
    dispatch({
        type: UPDATE_USER_PROFILE,
        payload: {
            profileType: type,
            data
        }
    })
}

export const createUserProfile = (dataParams, dispatch, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/user/create-profile`, dataParams).then((response)=>{
        console.log(response);
        if(cb)cb(true, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}