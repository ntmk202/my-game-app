// store.js
import { createStore, combineReducers } from 'redux';
import gameReducer from './pointSlices';

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = createStore(rootReducer);

export default store;
