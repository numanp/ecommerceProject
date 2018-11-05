import { combineReducers } from 'redux';
<<<<<<< HEAD

import cartReducer from './cart-reducer';
import productsReducer from './products-reducer';
import reviewReducer from './review-reducer'
=======
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import userAdminReducer from './user-admin-reducer';
import userReducer from './user-reducer';
>>>>>>> da42474a0334014a57e8398dcc6069c1b2560b5f

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
<<<<<<< HEAD
  reviews: reviewReducer,
});
=======
  userAdmin: userAdminReducer,
  user: userReducer,
});

export default rootReducer;
>>>>>>> da42474a0334014a57e8398dcc6069c1b2560b5f
