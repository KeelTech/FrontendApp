import { CHAT_LOADING, MERGE_CHAT_MESSAGES } from '@constants/types';
import { API_GET, API_POST} from '../../api/api.js';

export const getChatMessages = (caseId="", headers, dispatch, cb=null)=>{
    dispatch({
        type: CHAT_LOADING,
        payload: true
    })
    API_GET(`${API_BASE_URL}/v1/chats/list/${caseId}`, {
        ...headers
    }).then((response)=>{
        dispatch({
            type: CHAT_LOADING,
            payload: false
        })
        // dispatch({
        //     type: MERGE_CHAT_MESSAGES,
        //     payload: response && response.data
        // })
        if(cb)cb(response, null);
    }).catch((e)=>{
        dispatch({
            type: CHAT_LOADING,
            payload: false
        })
        if(cb)cb(null, true);
    })
}

export const sendChatMessage = (dataParams, cb=null)=>{
    API_POST(`${API_BASE_URL}/v1/chats/create`,
        dataParams
    ).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}