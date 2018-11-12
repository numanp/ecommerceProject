import {
  FETCH_SINGLE_PRODUCT,
  FETCH_PRODUCTS_USER,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_BY_NAME,
  FETCH_SINGLE_PRODUCT_wCATEGORIES,
} from '../constants';
import axios from 'axios';

export const fetchSingleProduct = product => ({
  type: FETCH_SINGLE_PRODUCT,
  product,
});

export const fetchProductsUser = products => ({
  type: FETCH_PRODUCTS_USER,
  products,
});

const fetchProductsByName = products => ({
  type: FETCH_PRODUCTS_BY_NAME,
  products,
});

export const getProductsByName = nombre => {
  return dispatch =>
    axios
      .get('/api/productos/busqueda', {
        params: {
          nombre: nombre,
        },
      })
      .then(res => {
        dispatch(fetchProductsByName(res.data));
      })
      .then(() => console.log('nombre ENTRA EN EL ACTION', nombre));
};
export const fetchSingleProductxCategories = producto => ({
  type: FETCH_SINGLE_PRODUCT_wCATEGORIES,
  producto,
});

export const getProducts = () => {
  return dispatch =>
    axios
      .get('/api/productos')
      .then(res => dispatch(fetchProductsUser(res.data)));
};

export const getSingleProduct = idProducto => {
  return dispatch =>
    axios
      .get(`/api/productos/${idProducto}`)
      .then(res => dispatch(fetchSingleProduct(res.data)));
};

export const getSingleProduct_wCategories = id => {
  return dispatch =>
    axios
      .get(`/api/productos/productoxcategoria/${id}`)
      .then(res => dispatch(fetchSingleProductxCategories(res.data)));
};

export const postCategoriesToProducts = (id, arr) => {
  return dispatch => {
    axios
      .post(`/api/productos/catAproducto/${id}`, arr)
      .then(console.log('TODO SALIO BIEN'));
  };
};

export const deleteProduct = productId => {
  return dispatch =>
    axios
      .delete(`/api/productos/${productId}`)
      .then(res => res.data)
      .then(producto =>
        dispatch({
          type: DELETE_PRODUCT,
          productId,
        }),
      );
};

export const fetchProductsByCategory = categoryId => {
  return dispatch =>
    axios.get(`/api/productos/todoDeUnaCategoria/${categoryId}`)
      .then((productos) => {
        dispatch(fetchProductsUser(productos.data))
      })
}
