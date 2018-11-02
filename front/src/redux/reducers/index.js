import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import userAdminReducer from './user-admin-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  admin: adminReducer,
  userAdmin: userAdminReducer,
  user: userReducer,
});

export default rootReducer;
