import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { reducer } from './rootReducer';

const middlewares = [logger, thunk];

const makeStore = (context) =>
  createStore(reducer, applyMiddleware(...middlewares));

export const wrapper = createWrapper(makeStore, { debug: true });
