import {
  GET_USER_DOCUMENTS,
  UPLOAD_USER_DOCUMENT,
  UPLOAD_USER_DOCUMENT_SUCCESS,
  UPLOAD_USER_DOCUMENT_FAIL,
  GET_DOC_TYPES,
} from '../../constants/types';

const defaultState = {
  userDocuments: [],
  docTypes: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_USER_DOCUMENTS: {
      let newState = { ...state };
      return newState;
    }
    case GET_DOC_TYPES: {
      let newState = { ...state };
      return newState;
      }
  }
  return state;
}
