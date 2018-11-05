import { FETCH_SINGLE_PRODUCT, FETCH_PRODUCTS } from '../constants'

export const fetchSingleProduct = product => ({
    type: FETCH_SINGLE_PRODUCT,
    product,
})

export const fetchProducts = products => ({
    type: FETCH_PRODUCTS,
    products
})