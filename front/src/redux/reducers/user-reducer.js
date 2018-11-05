import { ADD_REVIEW, FETCH_ORDERS_USER, LOGIN_SUCCESS, LOG_OUT, SIGN_UP } from '../constants';

const initialState = {
  reviews: [],
  loggedIn: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        //reviews: action.
      };
    case FETCH_ORDERS_USER:
      return {

      };

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        user: action.user
      });

    case LOGOUT:
      return Object.assign({}, state, {
        loggedIn: false,
        user: action.user
      });

    case SIGN_UP:
      return {

      };

    default:
      return state;
  }
}
