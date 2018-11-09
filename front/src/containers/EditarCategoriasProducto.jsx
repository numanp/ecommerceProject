
import React, { Component } from 'react';
import AdminAddProduct from '../components/AdminAddProduct'
import { connect } from 'react-redux';
import { addProduct, fetchCategorys } from '../redux/action-creators/user'

class editCategoriasProducto extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    }
    //MANEJA FORMULARIO PARA AGREGAR PRODUCTO

    handleSubmit(evt) {
        evt.preventDefault();
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
function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategorys: function (categorias) {
            dispatch(fetchCategorys(categorias))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(editCategoriasProducto);