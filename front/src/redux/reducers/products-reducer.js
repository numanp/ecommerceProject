import {
    FETCH_PRODUCT,
    FETCH_PRODUCTS_BY_CATEGORY,
    FETCH_SINGLE_PRODUCT,
    PRODUCT_AMOUNT,
    UPDATE_PRODUCT
} from '../constants';

const productsReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_PRODUCT:
            return [...state, action.payload]
        default:
            return state
    }
}

export default productsReducer;