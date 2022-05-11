import { ActionTypes } from '../actions';

const initialState = {
  data: {

  },
};

// eslint-disable-next-line default-param-last
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER:
      console.log('reducing weather');
      console.log('action.payload');
      return ({
        ...state,
        weather: action.payload,
      });
    default:
      console.log('not reducing weather');
      return state;
  }
};

export default weatherReducer;
