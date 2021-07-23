import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AUTH from './commons/auth.js';
import USER from './commons/user.js';
import LOGIN from './commons/login.js';
import COMMON_REDUCER from './common.js';
import DOCUMENTS from './commons/document.js';
import TASK_INFO from './consumerTaskInfo.js';
import AGENT_STORE from './agentTask.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const AUTH_PERSIST = {
  key: 'AUTH',
  storage: storage,
  whitelist: ['counter'],
};

const USER_PERSIST = {
  key: 'USER',
  storage: storage,
  whitelist: ['userObj'],
};

const USER_LOGIN = {
  key: 'USER_LOGIN',
  storage: storage,
  whitelist: ['IsloggedIn'],
};

const COMMON_REDUCER_PERSIST = {
  key: 'COMMON',
  storage: storage,
  whitelist: ['activeWidget'],
};

const USER_DOCUMENTS = {
  key: 'DOCUMENTS',
  storage: storage,
};

const TASK_INFO_PERSIST = {
  key: 'TASK_INFO',
  storage: storage,
  whitelist: [''],
};

const AGENT_STORE_PERSIST = {
  key: 'AGENT_STORE',
  storage: storage,
  whitelist: [''],
};

const allReducers = combineReducers({
  AUTH: persistReducer(AUTH_PERSIST, AUTH),
  USER: persistReducer(USER_PERSIST, USER),
  LOGIN: persistReducer(USER_LOGIN, LOGIN),
  COMMON: persistReducer(COMMON_REDUCER_PERSIST, COMMON_REDUCER),
  DOCUMENTS: persistReducer(USER_DOCUMENTS, DOCUMENTS),
  TASK_INFO: persistReducer(TASK_INFO_PERSIST, TASK_INFO),
  AGENT_STORE: persistReducer(AGENT_STORE_PERSIST, AGENT_STORE),
});

const persistedReducer = persistReducer(persistConfig, allReducers);

export default persistedReducer;
