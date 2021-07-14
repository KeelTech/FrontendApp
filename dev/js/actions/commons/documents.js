import {
  GET_USER_DOCUMENTS,
  GET_USER_DOCUMENTS_FAIL,
  UPLOAD_USER_DOCUMENT,
  UPLOAD_USER_DOCUMENT_SUCCESS,
  UPLOAD_USER_DOCUMENT_FAIL,
} from '../../constants/types';
import { API_POST, API_GET } from '../../api/api.js';

export const getUserDocuments = (dispatch, cb) => {
  API_GET('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      if (response) {
        console.log('fetched user docs', response);
        dispatch({
          type: GET_USER_DOCUMENTS,
        });
        if (cb) cb(null, response);
      } else {
        let message = 'Failing to fetch user docs';
        dispatch({
          type: GET_USER_DOCUMENTS_FAIL,
          payload: {
            error_message: message,
          },
        });
        if (cb) cb(message, null);
      }
    })
    .catch(function (error) {
      let message = error.message;
      dispatch({
        type: GET_USER_DOCUMENTS_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};
