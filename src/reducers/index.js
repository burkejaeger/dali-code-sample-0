// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';

import weatherReducer from './weather-reducer';

const rootReducer = combineReducers({
  weatherSearch: weatherReducer,
});

export default rootReducer;
