import { FETCH_USERS, DELETE_USER, MAKE_ADMIN } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      console.log({ action });
      return [...state, ...action.users];
    }
    case DELETE_USER: {
      console.log({ action });
      return state.filter(user => user.id !== action.userId);
    }
    case MAKE_ADMIN: {
      console.log({ action });
      return state.map(user => {
        if (user.id === action.userId) {
          user.admin = true;
        }
        return user;
      });
    }

    default:
      return state;
  }
};
