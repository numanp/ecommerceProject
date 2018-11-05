import { FETCH_SINGLE_PRODUCT, FETCH_PRODUCTS } from '../constants'
import axios from 'axios'

export const fetchSingleProduct = product => ({
    type: FETCH_SINGLE_PRODUCT,
    product,
})

export const fetchProducts = products => ({
    type: FETCH_PRODUCTS,
    products
})

export const getProducts = () => {
    return (dispatch) =>
        axios.get('/api/productos')
            .then((res) => dispatch(fetchProducts(res.data)))
}

export const getSingleProduct = (idProducto) => {
    return (dispatch) =>
        axios.get(`/api/productos/${idProducto}`)
            .then((res) => dispatch(fetchSingleProduct(res.data)))
}
