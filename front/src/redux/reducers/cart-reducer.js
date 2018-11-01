const cartReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload]

        case 'REMOVE':
            const firstMatchIndex = state.indexOf(action.payload)
            return state.filter( (item, index) => index !== firstMatchIndex)

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