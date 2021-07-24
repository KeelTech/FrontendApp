import { GET_USER_DOCUMENTS } from '../../constants/types';

const defaultState = {
  userDocuments: [],
  docTypes: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_USER_DOCUMENTS: {
      let newState = { ...state };
      newState.userDocuments.push(action.payload);
      return newState;
    }
  }
  return state;
}
