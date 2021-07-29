import {
  GET_USER_DOCUMENTS,
  GET_USER_DOCUMENTS_FAIL,
  UPLOAD_USER_DOCUMENT,
  UPLOAD_USER_DOCUMENT_SUCCESS,
  UPLOAD_USER_DOCUMENT_FAIL,
  GET_DOC_TYPES,
  GET_DOC_TYPES_FAIL,
  GET_SINGLE_DOC,
  GET_SINGLE_DOC_FAIL,
  GET_SINGLE_DOC_LOADING,
  DELETE_DOC_SUCCESS,
  DELETE_DOC_FAILURE,
  DELETE_DOC_LOADING,
} from '../../constants/types';
import STORAGE from '../../helpers/storage';
import { API_POST, API_GET, API_DELETE } from '../../api/api.js';

export const getUserDocuments = (dispatch, cb) => {
  API_GET(API_BASE_URL + '/v1/user/get-user-doc')
    .then(function (response) {
      console.log(response);
      if (response) {
        dispatch({
          type: GET_USER_DOCUMENTS,
          payload: response.data,
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
  formData.append('doc_type', data.id);
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
      console.log('fetched doc type', response);
      if (response) {
        dispatch({
          type: GET_DOC_TYPES,
          payload: response.data,
        });
        const { data } = response;
        if (cb) cb(null, data);
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

export const getSingleDocLink = (dataParams, dispatch, cb = null) => {
  const doc_id = dataParams.doc_id;
  dispatch({
    type: GET_SINGLE_DOC_LOADING,
    payload: {
      status: true,
    },
  });
  API_GET(API_BASE_URL + '/v1/doc/get-single-doc/' + doc_id)
    .then(function (response) {
      dispatch({
        type: GET_SINGLE_DOC_LOADING,
        payload: {
          status: false,
        },
      });
      dispatch({
        type: GET_SINGLE_DOC,
        payload: response || '',
        doc_id,
      });
      const file = new Blob([response], {
        type: 'application/pdf',
      });
      const fileURL = window.URL.createObjectURL(file);
      window.open(fileURL);
      if (cb) cb(data, null);
    })
    .catch((e) => {
      let message = e.message;
      dispatch({
        type: GET_SINGLE_DOC_FAIL,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(null, message);
    });
};

export const deleteUserDocument = (dataParams, dispatch, cb = null) => {
  const doc_id = dataParams.doc_id;
  dispatch({
    type: DELETE_DOC_LOADING,
    payload: {
      status: true,
    },
  });
  API_DELETE(API_BASE_URL + '/v1/user/delete-doc/' + doc_id)
    .then(function (response) {
      dispatch({
        type: DELETE_DOC_LOADING,
        payload: {
          status: false,
        },
      });
      dispatch({
        type: DELETE_DOC_SUCCESS,
        payload: response || '',
        doc_id,
      });
      if (cb) cb(null, data);
    })
    .catch((e) => {
      let message = e.message;
      dispatch({
        type: DELETE_DOC_FAILURE,
        payload: {
          error_message: message,
        },
      });
      if (cb) cb(null, message);
    });
};
