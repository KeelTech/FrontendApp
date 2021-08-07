import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AUTH from './commons/auth.js';
import USER from './commons/user.js';
import LOGIN from './commons/login.js';
import COMMON_REDUCER from './common.js'
import TASK_INFO from './consumerTaskInfo.js'
import AGENT_STORE from './agentTask.js'
import DOCUMENT_VAULT from './documentVault.js';
import CHAT from './chat.js';

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
    whitelist: ['activeWidget']
}

const TASK_INFO_PERSIST = {
    key: 'TASK_INFO',
    storage: storage,
    whitelist: ['']
}

const AGENT_STORE_PERSIST = {
  key: 'AGENT_STORE',
  storage: storage,
  whitelist: ['']
}

const DOCUMENT_VAULT_PERSIST = {
  key: 'DOCUMENT_VAULT',
  storage: storage,
  whitelist: ['']
}

const CHAT_PERSIST = {
  key: 'CHAT',
  storage: storage,
  whitelist: ['']
}

const allReducers = combineReducers({
  AUTH: persistReducer(AUTH_PERSIST, AUTH),
  USER: persistReducer(USER_PERSIST, USER),
  LOGIN: persistReducer(USER_LOGIN, LOGIN),
  COMMON: persistReducer(COMMON_REDUCER_PERSIST, COMMON_REDUCER),
  TASK_INFO: persistReducer(TASK_INFO_PERSIST, TASK_INFO),
  AGENT_STORE: persistReducer(AGENT_STORE_PERSIST, AGENT_STORE),
  DOCUMENT_VAULT: persistReducer(DOCUMENT_VAULT_PERSIST, DOCUMENT_VAULT),
  CHAT: persistReducer(CHAT_PERSIST, CHAT)
});

const persistedReducer = persistReducer(persistConfig, allReducers);

export default persistedReducer;
