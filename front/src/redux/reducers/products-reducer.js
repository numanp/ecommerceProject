import {
  FETCH_PRODUCTS_USER,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_SINGLE_PRODUCT,
  PRODUCT_AMOUNT,
  UPDATE_PRODUCT,
  FETCH_PRODUCTS_BY_NAME,
  FETCH_SINGLE_PRODUCT_wCATEGORIES,
} from '../constants';

const productsReducer = (
  state = {
    products: [],
    product: {},
    productosParaCarrito: [],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_USER:
      return Object.assign({}, state, {
        products: action.products,
      });
    case FETCH_SINGLE_PRODUCT:
      return Object.assign({}, state, {
        product: action.product,
      });
    case FETCH_PRODUCTS_BY_NAME:
      return Object.assign({}, state, {
        products: action.products,
      });
    case FETCH_SINGLE_PRODUCT_wCATEGORIES:
      return Object.assign({}, state, {
        producto_wCategories: action.producto,
      });
    default:
      return state;
  }
};

export default productsReducer;
