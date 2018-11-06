// import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, ADD_Q_TO_PRODUCTO, LESS_Q_TO_PRODUCTO } from '../constants';
import store from '../store'

export const addToCart = (producto) => ({
  type: ADD_TO_CART,
  payload: producto
})

export const removeFromCart = productoId => ({
  type: REMOVE_FROM_CART,
  payload: productoId
})

export const addQtoProduct = (productoId) => ({
  type: ADD_Q_TO_PRODUCTO,
  payload: productoId
})

const lessQtoProduct = (productoId) => ({
  type: LESS_Q_TO_PRODUCTO
})



export const addToLocalStorage = producto => dispatch => {
  localStorage.setItem('carrito', JSON.stringify(producto))
  dispatch(addToCart(producto))
}
