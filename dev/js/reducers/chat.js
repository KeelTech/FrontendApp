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
          newState.chatMessages = action.payload||[];
          return newState
        }
    }
    return state
}