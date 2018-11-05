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
    FETCH_ORDERS_USER,
    FETCH_PRODUCTS
} from '../constants';

//ACTION CREATORS VENTAS
const getOrders = orders => ({
    type: FETCH_ORDERS_ADMIN,
    orders,
});

const putOrders = order => ({
    type: UPDATE_ORDERS,
    order,
});

const postProduct = product => ({
    type: CREATE_PRODUCT,
    product,
});

//ACTION CREATORS CATEGORIAS
const addCategory = category => ({
    //ESTE ADD CATEGORY ASSIGNA UNA CATEGORIA A UN PRODUCTO
    type: ADD_CATEGORY,
    category,
});

const postCategory = category => ({
    //ESTE postCategory CREA UNA NUEVA CATEGORIA
    type: CREATE_CATEGORY,
    category,
});

const deleteCategory = id => ({
    type: REMOVE_CATEGORY,
    id,
});

const editCategory = category => ({
    type: EDIT_CATEGORY,
    category,
});

//ACTION CREATORS USERS
const putUser = user => ({
    type: UPDATE_USER,
    user,
});

const deleteUser = user => ({
    type: DELETE_USER,
    user,
});



//ACTIONS VENTAS
export const fetchOrders = () => dispatch =>
    axios
        .get('/api/admin/orders')
        .then(res => res.data)
        .then(orders => dispatch(getOrders(orders)));

export const updateOrders = (orderId, order) => dispatch =>
axios
    .put(`/api/orders/${orderId}`, order)
    .then(res => res.data)
    .then(order => dispatch(putOrders(order)));
    
//ACTIONS CATEGORYS
export const createCategory = categoria => dispatch =>
    axios.post('/api/categorias/', categoria)
    .then(res =>res.data)
    .then(data => dispatch(postCategory(data)))

//export const addCategory;// ESTA ACCION DEBE AGREGAR UNA CATEGORIA A UN PRODUCTO

export const removeCategory = categoryId => dispatch =>
    axios
        .delete(`/api/category/${categoryId}`)
        .then(res => res.data)
        .then(id => dispatch(deleteCategory(id)));

//ACTION USERS
export const updateUser = (userId, user) => dispatch =>
    axios
        .put(`/api/user/${userId}`, user)
        .then(res => res.data)
        .then(user => dispatch(putUser(user)));

export const addProduct = producto => dispatch =>
    axios
        .post('/api/productos/', producto)
        .then(res => res.data)
        .then(data => dispatch(postProduct(data)));


//PROBANDO DIEGO HACIENDO ANDAR LA LISTA DE TODOS LOS PRODUCTOS
const Fetch_Products = (data) => ({
    type: FETCH_PRODUCTS,
    data
});

export const fetchProducts = () => dispatch =>
    axios
        .get('/api/productos')
        .then(res =>res.data)
        .then(data => dispatch(Fetch_Products(data)))