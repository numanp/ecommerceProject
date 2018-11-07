import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCategorys,
  updateProduct,
  fetchProducts,
} from '../redux/action-creators/user';
import {
  getSingleProduct,
  deleteProduct,
} from '../redux/action-creators/products';

import AdminEditProduct from '../components/AdminEditProduct';

class AdminEditProductContainer extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('GET STATE DERIVATED FROM PROPS');
    return state.id ? state : props.product;
  }
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getSingleProduct();
    this.props.fetchProducts();
    this.setState({ ...this.props.product });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const productoAgregar = this.state;
    this.props.updateProduct(productoAgregar);
    this.props.history.push('/admin/adminListaProductos');
  }

  render() {
    console.log('This props: ', this.props);
    return (
      <div>
        {
          <AdminEditProduct
            handleSubmit={this.handleSubmit}
            listaCategorias={this.props.listaCategorias}
            selectedProd={this.state}
            handleChange={this.handleChange}
            deleteProduct={this.props.deleteProduct}
          />
        }
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  console.log(ownProps, 'ownprops');
  console.log('STATE.USERADMIN.LISTAPROD', state.userAdmin.listaProductos);
  const productID = ownProps.match.params.id;
  const selectedProd = state.userAdmin.listaProductos.find(
    prod => prod.id === parseInt(productID, 10),
  );

  return {
    listaCategorias: state.userAdmin.listaCategorias,
    product: selectedProd,
    history: ownProps.history,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategorys: function(categorias) {
      dispatch(fetchCategorys(categorias));
    },
    getSingleProduct: function(producto) {
      dispatch(getSingleProduct(producto));
    },
    updateProduct: function(producto) {
      dispatch(updateProduct(producto));
    },
    deleteProduct: function(productId) {
      dispatch(deleteProduct(productId));
    },
    fetchProducts: function() {
      dispatch(fetchProducts());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminEditProductContainer);
