import {
  ADD_REVIEW,
  FETCH_ORDERS_USER,
  LOGIN,
  LOGOUT,
  SIGN_UP,
} from '../constants';

const initialState = {
  reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        //reviews: action.
      };
    case FETCH_ORDERS_USER:
      return {};
    case LOGIN:
      return {};
    case LOGOUT:
      return {};
    case SIGN_UP:
      return {};
    default:
      return state;
  }
};

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
