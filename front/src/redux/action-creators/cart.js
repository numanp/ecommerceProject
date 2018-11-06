import { ADD_TO_CART, DELETE_PRODUCT, DECREASE_PRODUCT, INCREASE_PRODUCT } from '../constants';

const addToCart = producto => ({
  type: ADD_TO_CART,
  payload: producto
})

const removeFromCart = producto => ({
  type: DELETE_PRODUCT,
  payload: producto
})

const increaseCart = producto => ({
  type: INCREASE_PRODUCT,
  payload: producto
})


const decreaseCart = producto => ({
  type: DECREASE_PRODUCT,
  payload: producto
})


