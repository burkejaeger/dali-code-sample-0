import { ActionTypes } from '../actions';

const initialState = {
  data: {},
};

// eslint-disable-next-line default-param-last
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER:
      return ({
        ...state,
        data: action.payload,
      });
    default:
      return state;
  }
};

export default weatherReducer;
