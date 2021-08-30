import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO, GET_USER_PROFILE,  LOADING_USER_PROFILE, GET_FULL_USER_PROFILE, LOADING_FULL_USER_PROFILE, UPDATE_USER_PROFILE, SAVE_PLACE_INFO, CASE_DETAIL_LOADING, CASE_DETAILS, CALENDLY_URL_LOADING, FETCH_CALENDLY_URL } from '@constants/types';
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
    API_POST(`${API_BASE_URL}/v1/user/create-initial-profile`, dataParams).then((response)=>{
        if(cb)cb(true, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const updateProfile = (dataParams, dispatch, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/user/update-full-profile`, dataParams).then((response)=>{
        if(cb)cb(true, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getCaseDetail = (dataParams, dispatch, cb=null)=>{
    const {customerId} = dataParams;
    dispatch({
        type: CASE_DETAIL_LOADING,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/cases/list-cases-details/${customerId}`).then((response)=>{
        dispatch({
            type: CASE_DETAIL_LOADING,
            payload: false
        })
        if(response && response.status==1){
            dispatch({
                type: CASE_DETAILS,
                payload: response.message
            })
        }

    }).catch((e)=>{
        dispatch({
            type: CASE_DETAIL_LOADING,
            payload: false
        })
    })
}

export const getCalendlyLink = (dataParams, dispatch, cb=null)=>{
    dispatch({
        type: CALENDLY_URL_LOADING,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/calendly/agent/schedule-url`).then((response)=>{
        dispatch({
            type: CALENDLY_URL_LOADING,
            payload: false
        })
        if(response && response.status==1){
            dispatch({
                type: FETCH_CALENDLY_URL,
                payload: response.message && response.message.schedule_url
            })
        }

    }).catch((e)=>{
        dispatch({
            type: CALENDLY_URL_LOADING,
            payload: false
        })
    })
}

export const scheduleCall = (dataParams, dispatch, cb=null)=>{
    
    API_POST(`${API_BASE_URL}/v1/calendly/agent/schedule-call`, {
        ...dataParams
    }).then((response)=>{
        if(cb)cb(response);

    }).catch((e)=>{
        
    })
}

export const getScheduleDetail = (dataParams, dispatch, cb=null)=>{
    API_GET(`${API_BASE_URL}/v1/calendly/active-schedule/details`).then((response)=>{
        
        if(response && response.status==1){
            if(cb)cb(response);
        }

    }).catch((e)=>{
        
    })
}