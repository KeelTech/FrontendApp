import Axios from 'axios';
import STORAGE from '../helpers/storage';
import NAVIGATE from '../helpers/navigate';
import CONFIG from '../config';

export const base_url = CONFIG.API_BASE_URL;

let axiosInstance = Axios.create({
  baseURL: base_url,
  header: {},
});

function rejectHandler(response, urlInfo, callback) {
  if (
    response.response &&
    response.response.data &&
    response.response.data.request_errors
  ) {
    response = response.response.data.request_errors;
  } else if (response.response && response.response.data) {
    response = response.response.data;
  }
  callback(response);
}

const API_GET = (url) => {
  return STORAGE.getAuthToken().then((token) => {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (token) headers['AUTHORIZATION'] = `bearer ${token}`;
      axiosInstance({
        method: 'get',
        url: url,
        headers,
      }).then(
        (res) => {
          resolve(res.data);
        },
        (response) => {
          let urlInfo = {
            url: url,
            type: 'API_GET',
            token: token,
          };
          rejectHandler(response, urlInfo, reject);
        }
      );
    });
  });
};
const API_POST = (url, data) => {
  return STORAGE.getAuthToken({ url: url }).then((token) => {
    return new Promise((resolve, reject) => {
      let headers = {};
      //   if (token) headers['X-CID'] = token;
      axiosInstance({
        method: 'post',
        url: url,
        data: data,
        headers,
      }).then(
        (res) => {
          resolve(res.data);
        },
        (response) => {
          let urlInfo = {
            url: url,
            type: 'API_POST',
            data: data,
            token: token,
          };
          rejectHandler(response, urlInfo, reject);
        }
      );
    });
  });
};

const API_PUT = (url, data) => {
  return STORAGE.getAuthToken({ url: url }).then((token) => {
    return new Promise((resolve, reject) => {
      let headers = {
        'X-CLIENT-KEY': CONFIG.API_CLIENT_KEY,
        'X-AUTH-KEY': CONFIG.API_AUTH_KEY,
      };
      if (token) headers['X-CID'] = token;
      axiosInstance({
        method: 'put',
        url: url,
        data: data,
        headers,
      }).then(
        (res) => {
          resolve(res.data);
        },
        (response) => {
          let urlInfo = {
            url: url,
            type: 'API_PUT',
            data: data,
            token: token,
          };
          rejectHandler(response, urlInfo, reject);
        }
      );
    });
  });
};

const API_DELETE = (url) => {
  return STORAGE.getAuthToken({ url: url }).then((token) => {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (token) headers['X-CID'] = token;
      axiosInstance({
        method: 'delete',
        url: url,
        headers,
      }).then(
        (res) => {
          resolve(res.data);
        },
        (response) => {
          let urlInfo = {
            url: url,
            type: 'API_DELETE',
            token: token,
          };
          rejectHandler(response, urlInfo, reject);
        }
      );
    });
  });
};
module.exports = {
  API_GET,
  API_POST,
  API_PUT,
  API_DELETE,
};
