
import React, { Component } from 'react';
import AdminAddProduct from '../components/AdminAddProduct'
import {connect} from 'react-redux';
import {addProduct} from '../redux/action-creators/user'

class AdminAddProductContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //MANEJA FORMULARIO PARA AGREGAR PRODUCTO

    handleSubmit(evt){
        evt.preventDefault();
        console.log(this.state)
        const productoAgregar = {
            nombre: evt.target.nombreProducto.value,
            descripcion: evt.target.descripcionProducto.value,
            precio: evt.target.precioProducto.value,
            foto: evt.target.imgProducto.value,
            stock: evt.target.stockProducto.value
        }
        this.props.addProduct(productoAgregar)         
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
    return{ 
        //nuevoProducto: state.admin.product
    }
}
function mapDispatchToProps(dispatch){
    return{
        addProduct: function (producto){
            console.log(producto)
            console.log('Deberia estar dispatcheando')
            dispatch(addProduct(producto))
            }
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProductContainer);