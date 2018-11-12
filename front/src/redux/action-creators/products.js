import {
  FETCH_SINGLE_PRODUCT,
  FETCH_PRODUCTS_USER,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_BY_NAME,
  FETCH_SINGLE_PRODUCT_wCATEGORIES,
  FETCH_CATEGORIES_PRODUCT,
  DELETE_CATEGORY_PRODUCTO
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
    console.log('----action creator');
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

export const getAllCategoriasProducto = catesProducto => ({
  type: FETCH_CATEGORIES_PRODUCT,
  catesProducto,
});



export const getCategoriasProductoIndividual = id => {
  return dispatch =>
    axios
      .get(`/api/productos/productoxcategoria/${id}`)
      .then(categorias => dispatch(getAllCategoriasProducto(categorias.data.categorias)))
     // .then(res => dispatch(getAllCategoriasProducto(res.data)));
};

export const deleteOneCategorie = catEliminar => ({
  type: DELETE_CATEGORY_PRODUCTO,
  catEliminar,
});



export const deleteCategoriaProducto = id => {
  return dispatch =>
    axios
      .get(`/api/productos/productoxcategoria/${id}`)
      .then(categorias => dispatch(deleteOneCategorie(categorias.data)))
     // .then(res => dispatch(getAllCategoriasProducto(res.data)));
};



