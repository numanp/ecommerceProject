import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getSingleProduct, getProducts } from '../redux/action-creators/products';
import { addToCart, removeFromCart, addQtoProduct, lessQtoProduct } from '../redux/action-creators/cart';
import ListadoProductos from './ProductosSubContainer';
import ContainerSingleProduct from './ContainerSingleProduct';
import { Route, Switch } from 'react-router-dom';




function mapStateToProps(state) {
    return {
        product: state.products.product,
        productos: state.products.products,
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => {
            dispatch(getProducts())
        },
        getSingleProduct: (idProducto) => {
            dispatch(getSingleProduct(idProducto))
        },
        addToCart: (producto) => {
            dispatch(addToCart(producto))
        },
        removeFromCart: (productoId) => {
            dispatch(removeFromCart(productoId))
        },
        addQtoProduct: (productoId) => {
            dispatch(addQtoProduct(productoId))
        },
        lessQtoProduct: (productoId) => {
            dispatch(lessQtoProduct(productoId))
        },

    }

}


class ProductosContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getProducts()
        console.log(this.props)
    }


    render() {
        const { match } = this.props
        return (
            <div>
                <Switch>
                    <Route path={`${match.path}/singleProduct`} render={() => <ContainerSingleProduct lessQtoProduct={this.props.lessQtoProduct} addQtoProduct={this.props.addQtoProduct} removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart} product={this.props.product} />} />
                    <Route render={() => <ListadoProductos cart={this.props.cart} lessQtoProduct={this.props.lessQtoProduct} addQtoProduct={this.props.addQtoProduct} removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart} selectProduct={this.props.getSingleProduct} products={this.props.productos} />} />
                </Switch>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer)