import { ADD_REVIEW, FETCH_ORDERS_USER, LOGIN, LOGOUT, SIGN_UP } from '../constants';

const initialState = {
  reviews: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_REVIEW:
    return {
      ...state,
    };
    case FETCH_ORDERS_USER:
    return {

    };
    case LOGIN: 
    return {

    };
    case LOGOUT:
    return {

    };
    case SIGN_UP:
    return {

    };
    default:
      return state;
  }
}
