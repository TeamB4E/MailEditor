import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

let createStoreWithMiddleware;
if(process.env.DEV_MODE === 'development') {
  createStoreWithMiddleware = applyMiddleware(
    require('redux-immutable-state-invariant').default(),
    thunkMiddleware
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
  )(createStore);
}

const configureStore = (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
}

const store = configureStore();
export default store;
