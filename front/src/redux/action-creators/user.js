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
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_CATEGORYS,
  FETCH_PRODUCTS,
  UPDATE_PRODUCT,
} from '../constants';

// LOGIN & LOGOUT ACTIONS:
export const logginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

// export const logout = user => ({
//   type: LOGOUT,
//   user,
// });

// export const addLoginToLocalStorage = user => dispatch => {
//   axios
//     .post('api/login', user)
//     .then(res => dispatch(logginSuccess(res.data)))
//     .then(res => localStorage.setItem('login', JSON.stringify(res.user)));
// };

// export const removeLoginFromLocalStorage = () => dispatch => {
//   localStorage.removeItem('login');
//   dispatch(logout());
//   location.reload(); // refresca la página para que el login se pase a logout
// };

// // OTRAS ACCIONES:

// const editProduct = product => ({
//   type: UPDATE_PRODUCT,
//   product,
// });

// const getOrders = orders => ({
//   type: FETCH_ORDERS_ADMIN,
//   orders,
// });

// const putOrders = order => ({
//   type: UPDATE_ORDERS,
//   order,
// });

// const postProduct = product => ({
//   type: CREATE_PRODUCT,
//   product,

export const logout = user => ({
  type: LOGOUT,
  user,
});

export const addLoginToLocalStorage = user => dispatch => {
  axios
    .post('api/login', user)
    .then(res => dispatch(logginSuccess(res.data)))
    .then(res => sessionStorage.setItem('login', JSON.stringify(res.user)))
    .then(() => location.reload());
};

export const removeLoginFromLocalStorage = () => dispatch => {
  sessionStorage.removeItem('login');
  dispatch(logout());
  axios.post('api/logout').then(res => console.log(res.data));
  location.reload(); /// refresca la página para que el login se pase a logout
};

// OTRAS ACCIONES:

export const getOrders = orders => ({
  type: FETCH_ORDERS_ADMIN,
  orders,
});

export const putOrders = order => ({
  type: UPDATE_ORDERS,
  order,
});

export const postProduct = product => ({
  type: CREATE_PRODUCT,
  product,
});
export const Fetch_Products = data => ({
  type: FETCH_PRODUCTS,
  data,
});

// //ACTION CREATORS CATEGORIAS
// const addCategory = category => ({
//   //ESTE ADD CATEGORY ASSIGNA UNA CATEGORIA A UN PRODUCTO
//   type: ADD_CATEGORY,
//   category,
// });

// const postCategory = category => ({
//   //ESTE postCategory CREA UNA NUEVA CATEGORIA
//   type: CREATE_CATEGORY,
//   category,
// });

// const deleteCategory = id => ({
//   type: REMOVE_CATEGORY,
//   id,
// });

// const editCategory = category => ({
//   type: EDIT_CATEGORY,
//   category,
// });

// const getCategory = category => ({
//   type: FETCH_CATEGORY,
//   category,
// });

// //ACTION CREATORS USERS
// // const putUser = user => ({
// //   type: UPDATE_USER,
// //   user,
// // });

// // const deleteUser = user => ({
// //   type: DELETE_USER,
// //   user,
// // });

// const Fetch_categorys = data => ({
//   type: FETCH_CATEGORYS,
//   data,
export const addCategory = category => ({
  type: ADD_CATEGORY,
  category,
});

export const postCategory = category => ({
  type: CREATE_CATEGORY,
  category,
});

export const deleteCategory = id => ({
  type: REMOVE_CATEGORY,
  id,
});

export const editCategory = category => ({
  type: EDIT_CATEGORY,
  category,
});

export const getCategory = category => ({
  type: FETCH_CATEGORY,
  category,
});

//ACTION CREATORS USERS
export const putUser = user => ({
  type: UPDATE_USER,
  user,
});

export const deleteUser = user => ({
  type: DELETE_USER,
  user,
});
export const Fetch_categorys = data => ({
  type: FETCH_CATEGORYS,
  data,
});

//ACTIONS VENTAS
// export const fetchOrders = () => dispatch =>
//   axios
//     .get('/api/admin/orders')
//     .then(res => res.data)
//     .then(orders => dispatch(getOrders(orders)));

// export const updateOrders = (orderId, order) => dispatch =>
//   axios
//     .put(`/api/orders/${orderId}`, order)
//     .then(res => res.data)
//     .then(order => dispatch(putOrders(order)));

// //ACTIONS CATEGORYS
// export const createCategory = categoria => dispatch =>
//   axios
//     .post('/api/categorias/', categoria)
//     .then(res => res.data)
//     .then(data => dispatch(postCategory(data)));
// //SET CATGORIES

// //export const addCategory;// ESTA ACCION DEBE AGREGAR UNA CATEGORIA A UN PRODUCTO
export const fetchOrders = () => dispatch =>
  axios
    .get('/api/ventas')
    .then(res => res.data)
    .then(orders => dispatch(getOrders(orders)));

export const updateOrders = (orderId, order) => dispatch =>
  axios
    .put(`/api/orders/${orderId}`, order)
    .then(res => res.data)
    .then(order => dispatch(putOrders(order)));

//ACTIONS CATEGORYS
export const createCategory = categoria => dispatch =>
  axios
    .post('/api/categorias/', { nombre: categoria })
    .then(res => res.data)
    .then(data => dispatch(postCategory(data)));

export const removeCategory = categoryId => dispatch =>
  axios
    .delete(`/api/categorias/${categoryId}`)
    .then(res => res.data)
    .then(id => dispatch(deleteCategory(id)));

//ACTION USERS
// export const updateUser = (userId, user) => dispatch =>
//   axios
//     .put(`/api/user/${userId}`, user)
//     .then(res => res.data)
//     .then(user => dispatch(putUser(user)));

export const addProduct = producto => dispatch =>
  //   axios
  //     .post('/api/productos/', producto)
  //     .then(res => res.data)
  //     .then(data => dispatch(postProduct(data)));

  // export const updateProduct = product => dispatch =>
  //   axios
  //     .put(`/api/productos/${product.id}`, product)
  //     .then(res => res.data)
  //     .then(console.log)
  //     .then(product => dispatch(editProduct(product)));

  // //PROBANDO DIEGO HACIENDO ANDAR LA LISTA DE TODOS LOS PRODUCTOS
  // const Fetch_Products = data => ({
  //   type: FETCH_PRODUCTS,
  //   data,
  // });

  // // export const removeUser = user => dispatch =>
  // //   axios
  // //     .delete(`/api/user/${user}`)
  // //     .then(res => res.data)
  // //     .then(user => dispatch(deleteUser(user)));
  // export const fetchProducts = () => dispatch =>
  //   axios
  //     .get('/api/productos')
  //     .then(res => res.data)
  //     .then(data => dispatch(Fetch_Products(data)));

  // export const fetchCategorys = () => dispatch =>
  //   axios
  //     .get('/api/categorias')
  //     .then(res => res.data)
  //     .then(data => dispatch(Fetch_categorys(data)));
  axios
    .post('/api/productos', producto)
    .then(res => res.data)
    .then(data => dispatch(postProduct(data)));

export const removeUser = user => dispatch =>
  axios
    .delete(`/api/user/${user}`)
    .then(res => res.data)
    .then(user => dispatch(deleteUser(user)));

export const fetchProducts = () => dispatch =>
  axios
    .get('/api/productos')
    .then(res => res.data)
    .then(data => dispatch(Fetch_Products(data)));

export const fetchCategorys = () => dispatch =>
  axios
    .get('/api/categorias')
    .then(res => res.data)
    .then(data => dispatch(Fetch_categorys(data)));
