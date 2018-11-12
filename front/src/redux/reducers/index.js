import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import userAdminReducer from './user-admin-reducer';
import userReducer from './user-reducer';
import reviewReducer from './review-reducer';
import usersReducer from './users-reducer';
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  userAdmin: userAdminReducer,
  user: userReducer,
  review: reviewReducer,
  users: usersReducer,
});

export default rootReducer;
