import {
  FETCH_ORDERS_ADMIN,
  UPDATE_ORDERS,
  UPDATE_USER,
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  CREATE_CATEGORY,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  EDIT_CATEGORY,
  FETCH_PRODUCTS,
  FETCH_CATEGORYS,
} from '../constants';

const initialState = {
  listaProductos: [],
  listaCategorias: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_ADMIN:
      return Object.assign({}, state, { orders: action.orders });
    case UPDATE_ORDERS:
      return Object.assign({}, state, { order: action.order });
    case UPDATE_USER:
      return Object.assign({}, state, { user: action.user });
    case REMOVE_CATEGORY:
      return Object.assign({}, state, { listaCategorias: action.id });
    case ADD_CATEGORY:
      //Esto asigna una categoria a un prodducto. No crea categoria
      return Object.assign({}, state, { category: action.id });
    case CREATE_CATEGORY:
      //Esto crea una categoria.
      return {
        ...state,
        list: [...state.listaProductos, action.category],
      };
    case FETCH_CATEGORYS:
      //Accedo a todas las categorias
      return Object.assign({}, state, { listaCategorias: [...action.data] });
    case FETCH_PRODUCTS:
      return Object.assign({}, state, { listaProductos: [...action.data] });
    case DELETE_PRODUCT: {
      console.log({ action });
      return Object.assign({}, state, {
        listaProductos: state.listaProductos.filter(
          product => product.id !== action.productId,
        ),
      });
    }
    default:
      return state;
  }
};
