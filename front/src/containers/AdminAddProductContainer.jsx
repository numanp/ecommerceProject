
import React, { Component } from 'react';
import AdminAddProduct from '../components/AdminAddProduct'
import {connect} from 'react-redux';
import {addProduct} from '../redux/action-creators/action-product'

class AdminAddProductContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //MANEJA FORMULARIO PARA AGREGAR PRODUCTO

    handleSubmit(evt){
        evt.preventDefault();
        console.log(this.state)
        this.props.addProduct(evt.target)         
    }    
    render() {
        return (
            <div>        
                
                <AdminAddProduct handleSubmit={this.handleSubmit} />
            </div>   
        )
    }
}
function mapStateToProps (state){
    return{ nuevoProducto: state.admin.product
    }
}
function mapDispatchToProps(dispatch){
    return{
        addProduct: function (producto){
            dispatch(addProduct(producto))
            }
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProductContainer);