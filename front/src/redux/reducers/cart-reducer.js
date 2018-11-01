import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../constants';

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]

        // case REMOVE_FROM_CART:
        //     const firstMatchIndex = state.indexOf(action.payload)
        //     return state.filter( (item, index) => index !== firstMatchIndex)

        default:
            return state
    }
}

export default cartReducer



// export const cartItemsWithQuantities = (cartItems) => {
//     return cartItems.reduce((acc, item) => {
//         const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
//         filteredItem !== undefined
//             ? filteredItem.quantity++
//             : acc.push({ ...item, quantity: 1})
//         return acc 
//     }, [])
// }