import {
  GET_USER_DOCUMENTS,
  GET_USER_DOCUMENTS_FAIL,
  UPLOAD_USER_DOCUMENT,
  UPLOAD_USER_DOCUMENT_SUCCESS,
  UPLOAD_USER_DOCUMENT_FAIL,
  GET_DOC_TYPES,
  GET_DOC_TYPES_FAIL,
} from '../../constants/types';
import { API_POST, API_GET } from '../../api/api.js';
import { useSelector } from 'react-redux';

export const getUserDocuments = (dispatch, cb) => {
  API_GET(API_BASE_URL + '/v1/user/get-user-doc')
    .then(function (response) {
      if (response) {
        dispatch({
          type: GET_USER_DOCUMENTS,
        });
        const { data } = response;
        if (cb) cb(null, data);
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

export const uploadUserDocument = (data, dispatch, cb) => {
  dispatch({
    type: UPLOAD_USER_DOCUMENT,
    payload: {
      loading: true,
    },
  });
  const formData = new FormData();
  formData.append('doc_file', data.selectedFile);
  formData.append('doc_type', data.value);
  API_POST(API_BASE_URL + '/v1/user/upload-doc', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(function (response) {
      if (response && response.status === 0) {
        dispatch({
          type: UPLOAD_USER_DOCUMENT,
          payload: {
            loading: false,
          },
        });
        let message = 'Documents Uploaded Successfully';
        dispatch({
          type: UPLOAD_USER_DOCUMENT_SUCCESS,
          payload: {
            signUp_message: message,
          },
        });
        if (cb) cb(null, response);
      } else {
        let message = 'failed to upload the document';
        dispatch({
          type: UPLOAD_USER_DOCUMENT_FAIL,
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
        type: UPLOAD_USER_DOCUMENT_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};

export const getDocTypeList = (dispatch, cb) => {
  API_GET(API_BASE_URL + '/v1/doc/doc-type-list')
    .then(function (response) {
      if (response) {
        console.log('fetched doc type', response);
        dispatch({
          type: GET_DOC_TYPES,
        });
        if (cb) cb(null, response);
      } else {
        let message = 'Failing to fetch doc types';
        dispatch({
          type: GET_DOC_TYPES_FAIL,
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
        type: GET_DOC_TYPES_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(message, null);
    });
};
