
import { applyMiddleware, combineReducers, createStore, } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from './appReducer';
import credentialsReducer from './credentialsReducer';
import profileInfoReducer from './profileInfoReducer';
import userAddressInfoReducer from './userAddressInfoReducer';

const reducers = combineReducers({
  app: appReducer,
  credentials: credentialsReducer,
  profileInfo: profileInfoReducer,
  userAddressInfo: userAddressInfoReducer,
});

const middlewares = applyMiddleware(thunk, logger);

export const store = createStore(reducers, {}, middlewares);