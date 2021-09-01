import { CHAT_LOADING, MERGE_CHAT_MESSAGES } from '@constants/types';

const defaultState = {
    chatLoading: false,
    chatMessages: [],
    caseId: null
}

export default function (state = defaultState, action) {

    switch (action.type) {
        
        case CHAT_LOADING:{
            let newState = { ...state}
            newState.chatLoading = action.payload;
            return newState
        }

        case MERGE_CHAT_MESSAGES: {
            let newState = { ...state}
            let {messages, caseId} = action.payload;
            let newMessages = messages || [];
            newMessages.sort(function(a, b){return a.id - b.id})
            if(caseId == state.caseId) {
                newState.chatMessages = mergeChatMessages(newState.chatMessages, newMessages)
            } else {
                newState.chatMessages = newMessages
            }
            newMessages.caseId = caseId
            return newState
        }
    }
    return state
}




function mergeChatMessages(oldMessages=[], newMessages=[]) {
    if(!isMergeRequired(oldMessages, newMessages)){
        return oldMessages
    }
    let finalMessages = []
    let added = {}
    let i = 0
    let j = 0
    while(i < oldMessages.length || j < newMessages.length){
        if (i < oldMessages.length && j < newMessages.length){
            if(oldMessages[i].id > newMessages[j].id){
                addDedup(added, finalMessages, newMessages[j])
                j++
            } else {
                addDedup(added, finalMessages, oldMessages[i])
                i++
            }
            continue
        }
        if (i < oldMessages.length){
            addDedup(added, finalMessages, oldMessages[i])
            i++
        } else {
            addDedup(added, finalMessages, newMessages[j])
            j++
        }
    }
    return finalMessages
}

function addDedup(added, finalMessages, message){
    if(added[message.id]){
        return
    }
    finalMessages.push(message)
    added[message.id] = true
    return
}

function isMergeRequired(oldMessages=[], newMessages=[]) {
    if(newMessages.length && oldMessages.length) {
        return !(newMessages[newMessages.length - 1].id == oldMessages[oldMessages.length - 1].id)
    }
    return true
}