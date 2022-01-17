import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import userReducer from './user/userReducer';
import { pizzaReducer } from './pizza/pizzaReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  pizzas: pizzaReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
