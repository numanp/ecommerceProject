import { combineReducers } from 'redux';
<<<<<<< HEAD
import cartReducer from './cart-reducer';

export default combineReducers({
  // cart: cartReducer
=======

import cartReducer from './cart-reducer';
import productsReducer from './products-reducer';

export default combineReducers({
  cart: cartReducer,
  products: productsReducer
>>>>>>> 4ba507a0f0c28892435ea6d9f6dcb1bd3e1a43a1
});