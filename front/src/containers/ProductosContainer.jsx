import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import { fetchSingleProduct, fetchProducts } from '../redux/action-creators/products'
import ListadoProductos from './ProductosSubContainer'

import data from '../baseHarcodeada/products.json'

function mapStateToProps(state) {
    return {
        product: state.product,
        productos: state.products,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSingleProduct: (producto) => {
            dispatch(fetchSingleProduct(producto))
        },
        getProducts: (productos) => {
            dispatch(fetchProducts(productos))
        }
    }
}

class ProductosContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get('api/productos')
            .then(data => this.props.getProducts(data))
    }

    render() {
        return (
            <div>
                {/*  <ListadoProductos products={this.props.productos} /> */}
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer)