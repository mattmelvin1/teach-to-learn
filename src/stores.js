import { combineReducers, createStore } from 'redux';
import classReducer from './Reducers/classReducer.js';


export const reducers = combineReducers({
   classes: classReducer,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
