import { ADD_REVIEW, FETCH_ORDERS_USER, LOGIN_SUCCESS, LOG_OUT, SIGN_UP } from '../constants';

const initialState = {
  reviews: [],
  loggedIn: false,
  user: {}
};

export default (state = initialState, action) => {
  console.log('user-reducer: ', action)
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

    case LOG_OUT:
      return Object.assign({}, state, {
        loggedIn: false,
        user: {}
      });

    case SIGN_UP:
      return {

      };
    default:
      return state;
  }
}

// export default (state = initialState, action) => {
//   switch(action.type) {
//     case RECEIVE_PLAYLISTS:
//       return {
//         ...state,
//         reviews: action.playlists,
//       };
//     default:
//       return state;
//   }
// };