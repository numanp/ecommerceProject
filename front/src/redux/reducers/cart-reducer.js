import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants';

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return [...state, action.payload]
        default:
            return state
    }
}

export default cartReducer
