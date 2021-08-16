import { CHAT_LOADING, MERGE_CHAT_MESSAGES } from '@constants/types';

const defaultState = {
    chatLoading: false,
    chatMessages: []
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
          let newMessages = action.payload||[];
          newMessages.sort(function(a, b){return a.id - b.id})
          newState.chatMessages = mergeChatMessages(newState.chatMessages, newMessages)
          return newState
        }
    }
    return state
}




function mergeChatMessages(oldMessages=[], newMessages=[]) {
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