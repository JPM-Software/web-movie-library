import { combineReducers } from '@reduxjs/toolkit';

import moviesReducer from './movies';
import userReducer from './user';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
});

export default rootReducer;
