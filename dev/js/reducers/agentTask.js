import { ADD_CASE_LIST, CASE_LIST_LOADING } from '@constants/types';

const defaultState = {
    caseListLoading: false,
    caseList: []
}

export default function (state = defaultState, action) {

    switch (action.type) {
        
        case CASE_LIST_LOADING:{
            let newState = { ...state}
            newState.caseListLoading = action.payload;
            return newState
        }

        case ADD_CASE_LIST: {
          let newState = { ...state}
          newState.caseList = action.payload||[];
          return newState
        }
    }
    return state
}