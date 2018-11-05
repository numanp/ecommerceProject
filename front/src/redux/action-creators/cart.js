// import axios from 'axios';
import { ADD_TO_CART } from '../constants';
import store from '../store'

const addToCart = producto => ({
  type: ADD_TO_CART,
  payload: producto
})



export const addToLocalStorage = producto => dispatch => {

  localStorage.setItem('carrito', JSON.stringify(producto))
  dispatch(addToCart(producto))
}
