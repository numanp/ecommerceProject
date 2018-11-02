import React from 'react'
import ProductListItem from '../components/ProductToMap'
import { connect } from 'react-redux'
import { ADD_TO_CART } from '../redux/constants';
// import { cartItemsWithQuantities } from '../redux/cart'


function ListadoProductos(props) {
    return <div className="container Group-Products-Container-Props">
    <div className="row">
        {
            props.products.map(product =>
                <ProductListItem
                    product={product}
                    addToCart={props.addToCart}
                    key={product.id}
                    // cart={cartItemsWithQuantities(props.cart)}
                />)
        }
            </div>
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (producto) => {
            dispatch({ type: ADD_TO_CART, payload: producto })
        },
        // removeFromCart: (item) => {
        //     dispatch({ type: 'REMOVE', payload: item })
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListadoProductos)