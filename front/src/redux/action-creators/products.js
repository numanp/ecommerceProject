import { FETCH_SINGLE_PRODUCT, FETCH_PRODUCTS_USER } from '../constants'
import axios from 'axios'

export const fetchSingleProduct = product => ({
    type: FETCH_SINGLE_PRODUCT,
    product,
})

export const fetchProductsUser = products => ({
    type: FETCH_PRODUCTS_USER,
    products
})

export const getProducts = () => {
    return (dispatch) =>
        axios.get('/api/productos')
            .then((res) => dispatch(fetchProductsUser(res.data)))
}

export const getSingleProduct = (idProducto) => {
    return (dispatch) =>
        axios.get(`/api/productos/${idProducto}`)
            .then((res) => dispatch(fetchSingleProduct(res.data)))
}
