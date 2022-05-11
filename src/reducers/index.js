// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';

import CountReducer from './count-reducer';
import weatherReducer from './weather-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  weatherSearch: weatherReducer,
});

export default rootReducer;
