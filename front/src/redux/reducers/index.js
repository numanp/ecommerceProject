import { combineReducers } from 'redux';
import cartReducer from './lyrics-reducer';

export default combineReducers({
  cart: cartReducer
});