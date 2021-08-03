import { DOCUMENT_LIST_LOADING, ADD_DOCUMENT_LIST } from '@constants/types';

const defaultState = {
    documentListLoading: false,
    documentList: []
}

export default function (state = defaultState, action) {

    switch (action.type) {
        
        case DOCUMENT_LIST_LOADING:{
            let newState = { ...state}
            newState.documentListLoading = action.payload;
            return newState
        }

        case ADD_DOCUMENT_LIST: {
          let newState = { ...state}
          newState.documentList = action.payload||[];
          return newState
        }
    }
    return state
}