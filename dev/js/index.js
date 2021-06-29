import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import persistedReducer from './reducers';
import App from './App.js'

import { persistStore, persistReducer } from 'redux-persist'

const middlewares = [thunk]
/**
 * Only log in DEV MODE.
 */
if (!DHM_PRODUCTION) {
    const logger = createLogger();
    middlewares.push(logger)
}

const store = createStore(
    persistedReducer,
    applyMiddleware(...middlewares)
);
  
let persistor = persistStore(store, null, () => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
})

