import { ADD_TO_CART, REMOVE_FROM_CART, ADD_Q_TO_PRODUCTO, LESS_Q_TO_PRODUCTO } from '../constants';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            var index = -1
            for (var i = 0; i < state.length; i++) {
                if (state[0].id == action.payload.id) {
                    index = i
                }
            }
            if (index == -1) return [...state, action.payload]
        case ADD_Q_TO_PRODUCTO:
            var obj = state.find((i) => i.id == action.payload).q++
            return Object.assign([], state, { cart: obj });
        case LESS_Q_TO_PRODUCTO:
            var obj = state.find((i) => i.id == action.payload).q--
            return Object.assign([], state, { cart: obj });
        case REMOVE_FROM_CART:
            var index = -1
            for (var i = 0; i < state.length; i++) {
                if (state[0].id == action.payload) {
                    index = i
                }
            }
            if (index !== -1) {
                return state = [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]
            }
        default:
            return state
    }
}

export default cartReducer

