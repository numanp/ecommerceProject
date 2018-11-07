
import React, { Component } from 'react';
import AdminAddProduct from '../components/AdminAddProduct'
import { connect } from 'react-redux';
import { addProduct, fetchCategorys } from '../redux/action-creators/user'

class AdminAddProductContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchCategorys();
    }
    //MANEJA FORMULARIO PARA AGREGAR PRODUCTO

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(evt.target)
        const productoAgregar = {
            nombre: evt.target.nombreProducto.value,
            descripcion: evt.target.descripcionProducto.value,
            precio: evt.target.precioProducto.value,
            foto: evt.target.imgProducto.value,
            stock: evt.target.stockProducto.value
        }
        console.log("PRODUCTO AGREGAR: ");

        console.log(productoAgregar)
        this.props.addProduct(productoAgregar)
    }
    render() {
        return (
            <div>
                <AdminAddProduct handleSubmit={this.handleSubmit} listaCategorias={this.props.listaCategorias} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        listaCategorias: state.userAdmin.listaCategorias
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: function (producto) {
            dispatch(addProduct(producto))
        },
        fetchCategorys: function (categorias) {
            dispatch(fetchCategorys(categorias))
        },
    }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProductContainer);