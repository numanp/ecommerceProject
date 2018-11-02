import React from 'react'
import ProductListItem from '../components/ProductToMap'
import { connect } from 'react-redux'
//import { cartItemsWithQuantities } from '../redux/cart'


function ListadoProductos(props) {
    return <div>
        {
            props.products.map(product =>
                <ProductListItem
                    key={props.id}
                    product={product}
                    addToCart={props.addToCart}
                    cart={cartItemsWithQuantities(props.cart)}
                />)
        }
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListadoProductos)