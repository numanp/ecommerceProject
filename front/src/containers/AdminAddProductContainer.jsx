import React, { Component } from 'react';
import AdminAddProduct from '../components/AdminAddProduct';
import { connect } from 'react-redux';
import { addProduct, fetchCategorys } from '../redux/action-creators/user';

class AdminAddProductContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}
  //MANEJA FORMULARIO PARA AGREGAR PRODUCTO

  handleSubmit(evt) {
    evt.preventDefault();
    const productoAgregar = {
      nombre: evt.target.nombreProducto.value,
      descripcion: evt.target.descripcionProducto.value,
      precio: evt.target.precioProducto.value,
      foto1: evt.target.imgProducto1.value,
      foto2: evt.target.imgProducto2.value,
      foto3: evt.target.imgProducto3.value,
      stock: evt.target.stockProducto.value,
    };
    this.props.addProduct(productoAgregar);
    this.props.history.push('/admin');
  }
  render() {
    return (
      <div>
        <AdminAddProduct handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    history: ownProps.history,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: function(producto) {
      dispatch(addProduct(producto));
    },
    fetchCategorys: function(categorias) {
      dispatch(fetchCategorys(categorias));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminAddProductContainer);
