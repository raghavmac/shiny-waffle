import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [thunk];

// Enable only on webpack development mode
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger());
}

// eslint-disable-next-line
export const store = createStore(rootReducer, applyMiddleware(...middlewares));