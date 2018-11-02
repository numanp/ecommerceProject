// /redux/actions-creators/user.js

import axios from 'axios';
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

const fetchOrders = orders => ({
  type: FETCH_ORDERS_ADMIN,
  orders,
});

const removeCategory = id => ({
  type: REMOVE_CATEGORY,
  id,
});

const updateOrders = order => ({
  type: UPDATE_ORDERS,
  order,
});

const updateUser = user => ({
  type: UPDATE_USER,
  user,
});

const addCategory = category => ({
  type: ADD_CATEGORY,
  category,
});

const createCategory = category => ({
  type: CREATE_CATEGORY,
  category,
});

const createProduct = product => ({
  type: CREATE_PRODUCT,
  product,
});

const deleteUser = user => ({
  type: DELETE_USER,
  user,
});

const editCategory = category => ({
  type: EDIT_CATEGORY,
  category,
});

export const fetchOrders = () => dispatch =>
  axios
    .get('/api/admin/orders')
    .then(res => res.data)
    .then(orders => dispatch(fetchOrders(orders)));

export const removeCategory = categoryId => dispatch =>
  axios
    .delete(`/api/category/${categoryId}`)
    .then(res => res.data)
    .then(id => dispatch(removeCategory(id)));

export const updateOrders = (orderId, order) => dispatch =>
  axios
    .put(`/api/orders/${orderId}`, order)
    .then(res => res.data)
    .then(order => dispatch(updateOrders(order)));

export const updateUser = (userId, user) => dispatch =>
  axios
    .put(`/api/user/${userId}`, user)
    .then(res => res.data)
    .then(user => dispatch(updateUser(user)));
