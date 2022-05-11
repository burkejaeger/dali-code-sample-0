import { ActionTypes } from '../actions';

const initialState = {
  weather: {},
};

// eslint-disable-next-line default-param-last
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER:
      console.log('reducing weather');
      console.log(action.payload);
      console.log(action.type);

      return ({
        weather: action.payload,
      });
    default:
      console.log('not reducing weather');
      return state;
  }
};

export default weatherReducer;
