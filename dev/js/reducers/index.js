import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LOGOUT_USER } from '@constants/types';
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
  whitelist: []
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
  whitelist: ['IsloggedIn', 'isAgent'],
};

const COMMON_REDUCER_PERSIST = {
    key: 'COMMON',
    storage: storage,
    whitelist: ['activeWidget']
}

const TASK_INFO_PERSIST = {
    key: 'TASK_INFO',
    storage: storage,
    whitelist: ['userInfo', 'countryList', 'lastVisibleNotification'],
    blacklist: ['calendlyURL', 'planLoaded']
}

const AGENT_STORE_PERSIST = {
  key: 'AGENT_STORE',
  storage: storage,
  whitelist: ['agentProfile', 'templateList']
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

// const rootReducer = (state, action) => {
//   //if(!state) return undefined;
//   if (action.type === LOGOUT_USER) {
//       // for all keys defined in your persistConfig(s)
//       storage.removeItem('persist:root')
//       storage.removeItem('persist:AUTH')
//       storage.removeItem('persist:USER')
//       storage.removeItem('persist:USER_LOGIN')
//       storage.removeItem('persist:COMMON')
//       storage.removeItem('persist:TASK_INFO')
//       storage.removeItem('persist:AGENT_STORE')
//       storage.removeItem('persist:DOCUMENT_VAULT')
//       storage.removeItem('persist:CHAT')
//       console.log('before logout', state);

//       return allReducers(undefined, action);
//   }
//   console.log('after logout', state);
//   return allReducers(state, action);
// };

const persistedReducer = persistReducer(persistConfig, allReducers);

export default persistedReducer;
