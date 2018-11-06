import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import * as ProductsActions from '../redux/action-creators/products'
import ListadoProductos from './ProductosSubContainer'
import ContainerSingleProduct from './ContainerSingleProduct'
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';



function mapStateToProps(state) {
    return {
        product: state.products.product,
        productos: state.products.products,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ProductsActions, dispatch)
}


class ProductosContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getProducts()
    }


    render() {
        console.log(this.props)
        const { match } = this.props
        return (
            <div>
                <Switch>
                    <Route path={`${match.path}/singleProduct`} render={() => <ContainerSingleProduct product={this.props.product} />} />
                    <Route render={() => <ListadoProductos selectProduct={this.props.getSingleProduct} products={this.props.productos} />} />
                </Switch>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer)