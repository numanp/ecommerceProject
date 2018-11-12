import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminProductos from '../components/AdminProductos';
import { fetchProducts } from '../redux/action-creators/user'

class AdminManejarProductos extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                {
                    <AdminProductos listaProductos={this.props.listaProductos} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listaProductos: state.userAdmin.listaProductos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: function (productos) {
            dispatch(fetchProducts(productos))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminManejarProductos);