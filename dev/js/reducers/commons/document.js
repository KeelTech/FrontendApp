import { GET_USER_DOCUMENTS, GET_DOC_TYPES } from '../../constants/types';

const defaultState = {
  userDocuments: [],
  docTypes: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_USER_DOCUMENTS: {
      let newState = { ...state };
      newState.userDocuments = [...action.payload];
      return newState;
    }
    case GET_DOC_TYPES: {
      let newState = { ...state };
      newState.docTypes = [...action.payload];
      return newState;
    }
  }
  return state;
}
