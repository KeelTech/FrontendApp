import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import COMMON_REDUCER from './common.js'


// import AUTH from './commons/auth.js'
// import USER from './commons/user.js'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

// const AUTH_PERSIST = {
//     key: 'AUTH',
//     storage: storage,
//     whitelist: ['counter']
// }

// const USER_PERSIST = {
//     key: 'USER',
//     storage: storage,
//     whitelist: ['userObj']
// }

const COMMON_REDUCER_PERSIST = {
    key: 'COMMON',
    storage: storage,
    whitelist: ['']
}


const allReducers = combineReducers({
    // AUTH: persistReducer(AUTH_PERSIST, AUTH),
    // USER: persistReducer(USER_PERSIST, USER),
    COMMON: persistReducer(COMMON_REDUCER_PERSIST, COMMON_REDUCER)
});

const persistedReducer = persistReducer(persistConfig, allReducers)

export default persistedReducer
