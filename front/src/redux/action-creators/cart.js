// import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, ADD_Q_TO_PRODUCTO, LESS_Q_TO_PRODUCTO, UPDATE_CART } from '../constants';
import store from '../store'
import axios from 'axios'

//BOTONES DEL CARRO
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

export const lessQtoProduct = (productoId) => ({
  type: LESS_Q_TO_PRODUCTO,
  payload: productoId
})

export const actualizarCarro = (arreglo) => ({
  type: UPDATE_CART,
  payload: arreglo
})

/* export const addToLocalStorage = producto => dispatch => {
  sessionStorage.setItem('carrito', JSON.stringify(producto))
  dispatch(addToCart(producto))
} */



