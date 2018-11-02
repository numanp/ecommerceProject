import axios from 'axios';

import { ADD_CATEGORY, CREATE_CATEGORY, CREATE_PRODUCT,DELETE_USER,EDIT_CATEGORY,} from '../constants';

export const addCategory = category => ({
  type: ADD_CATEGORY,
  category,
});

export const createCategory = category => ({
  type: CREATE_CATEGORY,
  category,
});

export const createProduct = (product) => ({
    type: CREATE_PRODUCT,
    product,
});

export const deleteUser = user => ({
  type: DELETE_USER,
  user,
});

export const editCategory = category => ({
  type: EDIT_CATEGORY,
  category,
});

export const fetchAlbum = idwq951 => dispatch =>
  axios.post(`/RUTA`,{PRODUCTO})
    .then(res => res.data)
    .then(producto => dispatch(createProduct(producto)));