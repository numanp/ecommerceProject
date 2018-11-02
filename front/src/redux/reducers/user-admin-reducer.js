import {
  FETCH_ORDERS_ADMIN,
  UPDATE_ORDERS,
  UPDATE_USER,
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  CREATE_CATEGORY,
  CREATE_PRODUCT,
  DELETE_USER,
  EDIT_CATEGORY,
} from '../constants';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_ADMIN:
      return Object.assign({}, state, { orders: action.orders });
    case UPDATE_ORDERS:
      return Object.assign({}, state, { order: action.order });
    case UPDATE_USER:
      return Object.assign({}, state, { user: action.user });
    case REMOVE_CATEGORY:
      return Object.assign({}, state, { category: action.id });
    default:
      return state;
  }
};
