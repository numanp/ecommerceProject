import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_BY_CATEGORY,
    FETCH_SINGLE_PRODUCT,
    PRODUCT_AMOUNT,
    UPDATE_PRODUCT
} from '../constants';

const productsReducer = (state = {
    products: [],
    product: {},
    productosParaCarrito: []
}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return Object.assign({}, state, {
                products: action.products
            })
        case FETCH_SINGLE_PRODUCT:
            return Object.assign({}, state, {
                product: action.product
            })
        default:
            return state
    }
}

export default productsReducer;