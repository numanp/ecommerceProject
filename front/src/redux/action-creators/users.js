import axios from 'axios';

import { FETCH_USERS, DELETE_USER, MAKE_ADMIN } from '../constants';

export const fetchUsers = () => dispatch =>
  axios.get('/api/user').then(res => {
    console.log({ res });
    dispatch({
      type: FETCH_USERS,
      users: res.data,
    });
  });

export const deleteUser = userId => dispatch =>
  axios
    .delete(`/api/user/${userId}`)
    .then(res => res.data)
    .then(user =>
      dispatch({
        type: DELETE_USER,
        userId,
      }),
    );

export const makeUserAdmin = userId => dispatch =>
  axios
    .put(`/api/user/makeAdmin/${userId}`)
    .then(res => res.data)
    .then(user =>
      dispatch({
        type: MAKE_ADMIN,
        userId,
      }),
    );

// export const getProducts = () => {
//   return dispatch =>
//     axios.get('/api/productos').then(res => dispatch(fetchProducts(res.data)));
// };
