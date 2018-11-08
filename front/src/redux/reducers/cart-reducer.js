import { ADD_TO_CART, REMOVE_FROM_CART, ADD_Q_TO_PRODUCTO, LESS_Q_TO_PRODUCTO, UPDATE_CART } from '../constants';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART://AGREGAR TRY PARA QUE NO MUESTRE ERROR CUANDO NO PASE LA VALIDACION
            var index = -1
            for (var i = 0; i < state.length; i++) {
                if (state[i].id == action.payload.id) {
                    index = i
                }
            }
            if (index == -1) return [...state, action.payload]
        case REMOVE_FROM_CART:
            var index = -1
            var newArr = []
            for (var i = 0; i < state.length; i++) {
                if (state[i].id == action.payload) {
                    index = i
                }
            }
            for (var j = 0; j < state.length; j++) {
                if (j != index) newArr.push(state[j])
            }
            return state = newArr
        /* if (index !== -1) {
            return state = [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        } */
        case ADD_Q_TO_PRODUCTO:
            var obj = state.find((i) => i.id == action.payload).q++
            return Object.assign([], state, { cart: obj });
        case LESS_Q_TO_PRODUCTO:
            var obj = state.find((i) => i.id == action.payload).q--
            return Object.assign([], state, { cart: obj });
        case UPDATE_CART:
            if (Array.isArray(action.payload)) state = action.payload
        default:
            return state
    }
}

export default cartReducer

//ver q si no hace nada retorna el state