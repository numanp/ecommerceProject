import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from '../components/ProductToMap'
import { addToLocalStorage } from '../redux/action-creators/cart'


function ListadoProductos(props) {
    return <div className="container Group-Products-Container-Props">
                <div className="row">
                {
                    props.products.map(product =>
                        <ProductListItem
                            product={product}
                            addToCart={props.addToCart}
                            key={product.id}
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
            dispatch(addToLocalStorage(producto))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListadoProductos)