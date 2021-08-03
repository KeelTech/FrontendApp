import { DOCUMENT_LIST_LOADING, ADD_DOCUMENT_LIST } from '@constants/types';
import { API_GET, API_POST, API_PUT, API_DELETE } from '../../api/api.js';

export const getDocumentsList = (dataParams, dispatch, cb=null)=>{
    dispatch({
        type: DOCUMENT_LIST_LOADING,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/user/get-user-doc`, {
        ...dataParams
    }).then((response)=>{
        dispatch({
            type: DOCUMENT_LIST_LOADING,
            payload: false
        })
        dispatch({
            type: ADD_DOCUMENT_LIST,
            payload: response && response.data
        })
        if(cb)cb(response, null);
    }).catch((e)=>{
        dispatch({
            type: DOCUMENT_LIST_LOADING,
            payload: false
        })
        if(cb)cb(null, true);
    })
}

export const uploadDocument = (dataParams, dispatch, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/user/upload-doc`,
        dataParams
    ).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getDocumentTypes = (dataParams, dispatch, cb=null)=>{
    
    API_GET(`${API_BASE_URL}/v1/doc/doc-type-list`, {
        ...dataParams
    }).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const deleteDocument = (dataParams, dispatch, cb=null)=>{
    const { id } = dataParams;
    API_DELETE(`${API_BASE_URL}/v1/user/delete-doc/${id}`,
        dataParams
    ).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const downloadDocument = (dataParams, dispatch, cb=null)=>{
    const { docId } = dataParams;
    API_GET(`${API_BASE_URL}/v1/doc/get-single-doc/${docId}`,
        dataParams
    ).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}