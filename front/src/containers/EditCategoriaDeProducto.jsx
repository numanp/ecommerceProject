import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCategorys} from '../redux/action-creators/user'
import { getSingleProduct} from '../redux/action-creators/products'

import AdminEditCatProducto from '../components/AdminEditCatProducto'

class AdminEditProductContainer extends Component {
    constructor(props) {
        super(props);
       // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.fetchCategorys();
     //   this.props.getSingleProduct();
    }

  

    render() {
        console.log(this.props)
        return (
            <div>        
                <AdminEditCatProducto listaCategorias={this.props.listaCategorias} product={this.props.product}/>
            </div>   
        )
    }
}
function mapStateToProps (state, ownProps){
    console.log("lista productos ", state.userAdmin.listaProductos)
    const productID = ownProps.match.params.id
    const selectedProd = state.userAdmin.listaProductos.find(prod => prod.id === parseInt(productID,10))

    return { 
        product: selectedProd,
        listaCategorias:state.userAdmin.listaCategorias
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