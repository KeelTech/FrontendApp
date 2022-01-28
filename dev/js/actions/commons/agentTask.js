import { ADD_CASE_LIST, CASE_LIST_LOADING, FETCH_AGENT_PROFILE, AGENT_PROFILE_LOADING, AGENT_SCHEDULE_DETAILS, AGENT_SCHEDULE_LOADING, FETCH_TEMPLATE_LIST, FETCH_TEMPLATE_LIST_LOADING } from '@constants/types';
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

export const getAgentSchedule = (dataParams={}, dispatch, cb=null)=>{
    dispatch({
        type: AGENT_SCHEDULE_LOADING,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/calendly/active-schedule/details`).then((response)=>{
        dispatch({
            type: AGENT_SCHEDULE_LOADING,
            payload: false
        })
        dispatch({
            type: AGENT_SCHEDULE_DETAILS,
            payload: response && response.message||[]
        })
        if(cb)cb(response, null);
    }).catch((e)=>{
        dispatch({
            type: AGENT_SCHEDULE_LOADING,
            payload: false
        })
        if(cb)cb(null, true);
    })
}

export const getProgramList = (dataParams={}, dispatch, cb=null)=>{
    API_GET(`${API_BASE_URL}v1/cases/list-case-programs`).then((response)=>{
        if(response && response.data){
            if(cb)cb(response.data, false);
        }else{
            if(cb)cb(null, true);    
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const updateProgram = (dataParams={}, dispatch, cb=null)=>{
    const { caseId } = dataParams;
    API_POST(`${API_BASE_URL}v1/cases/update-program/${caseId}`, dataParams).then((response)=>{
        if(response && response.data){
            if(cb)cb(response.data, false);
        }else{
            if(cb)cb(null, true);
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getTemplateList = (dataParams={}, dispatch, cb=null)=>{
    const caseId = dataParams.case;
    API_GET(`${API_BASE_URL}v1/tasks/list-task-template`).then((response)=>{
        if(response && response.data){
            if(cb)cb(response.data, false);
        }else{
            if(cb)cb(null, true);    
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const createNotes = (dataParams={}, dispatch, cb=null)=>{
    const { caseId, postParams } = dataParams
    API_POST(`${API_BASE_URL}/v1/cases/create-agent-notes?case_id=${caseId}`, postParams).then((response)=>{
        if(response && response.data){
            if(cb)cb(response.data, false);
        }else{
            if(cb)cb(null, true);
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getTemplateListDetail = (dataParams={}, dispatch, cb=null)=>{
    const caseId = dataParams.case;
    dispatch({
        type: FETCH_TEMPLATE_LIST_LOADING,
        payload: true
    })
    API_GET(`${API_BASE_URL}v1/tasks/list-task-template`).then((response)=>{
        if(response && response.data){
            dispatch({
                type: FETCH_TEMPLATE_LIST_LOADING,
                payload: false
            })
            dispatch({
                type: FETCH_TEMPLATE_LIST,
                payload: response.data
            })
            if(cb)cb(response.data, false);
        }else{
            if(cb)cb(null, true);    
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const updateTemplateDetail = (dataParams={}, dispatch, cb=null)=>{
    const id = dataParams.id;
    API_POST(`${API_BASE_URL}v1/tasks/update-task-template/${id}`, dataParams).then((response)=>{
        if(response && response.data){
            if(cb)cb(response.data, false);
        }else{
            if(cb)cb(null, true);    
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const deleteTemplate = (dataParams={}, dispatch, cb=null)=>{
    const id = dataParams.id;
    API_DELETE(`${API_BASE_URL}v1/tasks/delete-task-template/${id}`, dataParams).then((response)=>{
        if(response && response.data){
            if(cb)cb(response.data, false);
        }else{
            if(cb)cb(null, true);    
        }
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}