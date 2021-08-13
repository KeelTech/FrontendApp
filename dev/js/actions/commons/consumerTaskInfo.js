import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO, GET_USER_PROFILE, LOADING_USER_PROFILE, GET_FULL_USER_PROFILE, LOADING_FULL_USER_PROFILE, UPDATE_USER_PROFILE, SAVE_PLACE_INFO } from '@constants/types';
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
    dispatch({
        type: UPDATE_USER_PROFILE,
        payload: dataParams
    })
}

export const createFullUserProfile = (dataParams, dispatch, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/user/create-full-profile`, dataParams).then((response)=>{
        if(cb)cb(true, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getCountryList = (dataParams, dispatch, cb=null)=>{
    API_GET(`${API_BASE_URL}/v1/core/countries`).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getStateList = (dataParams, dispatch, cb=null)=>{
    const { id } = dataParams;
    API_GET(`${API_BASE_URL}/v1/core/states/${id}`).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getCityList = (dataParams, dispatch, cb=null)=>{
    const { id } = dataParams;
    API_GET(`${API_BASE_URL}/v1/core/cities/${id}`).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const savePlaceInfo = (dataParams, dispatch, cb=null)=>{
    dispatch({
        type: SAVE_PLACE_INFO,
        payload: dataParams
    })
}

export const createProfile = (dataParams, dispatch, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/user/create-profile`, dataParams).then((response)=>{
        if(cb)cb(true, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}