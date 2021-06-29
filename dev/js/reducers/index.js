import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AUTH from './commons/auth.js'
import USER from './commons/user.js'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const AUTH_PERSIST = {
    key: 'AUTH',
    storage: storage,
    whitelist: []
}

const USER_PERSIST = {
    key: 'USER',
    storage: storage,
    whitelist: ['userObj']
}

const allReducers = combineReducers({
    AUTH: persistReducer(AUTH_PERSIST, AUTH),
    USER: persistReducer(USER_PERSIST, USER),
});

const persistedReducer = persistReducer(persistConfig, allReducers)

export default persistedReducer
