import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCategorys} from '../redux/action-creators/user'
import { getSingleProduct} from '../redux/action-creators/products'

import AdminEditProduct from '../components/AdminEditProduct'

class AdminEditProductContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.fetchCategorys();
        this.props.getSingleProduct();
    }

    handleSubmit(evt){
        evt.preventDefault();
        const productoAgregar = {
            nombre: evt.target.nombreProducto.value,
            descripcion: evt.target.descripcionProducto.value,
            precio: evt.target.precioProducto.value,
            foto: evt.target.imgProducto.value,
            stock: evt.target.stockProducto.value
        }
    }    

    render() {
        return (
            <div>        
                <AdminEditProduct
                    handleSubmit={this.handleSubmit}
                    listaCategorias={this.props.listaCategorias}
                    selectedProd={this.props.product}
                  />
            </div>   
        )
    }
}
function mapStateToProps (state, ownProps){
    const productID = ownProps.match.params.id
    const selectedProd = state.userAdmin.listaProductos.find(prod => prod.id === parseInt(productID,10))

    return { 
        listaCategorias: state.userAdmin.listaCategorias,
        product: selectedProd
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchCategorys: function (categorias){
            dispatch(fetchCategorys(categorias))
        },
        getSingleProduct: function(producto){
            dispatch(getSingleProduct(producto))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminEditProductContainer);