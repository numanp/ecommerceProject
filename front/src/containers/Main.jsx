//DEPENDENCIAS
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { logginSuccess } from '../redux/action-creators/user';
//COMPONENTES
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import CarritoSlider from '../containers/CarritoSliderContainer';
import Productos from './ProductosContainer';
import SingleProduct from './ContainerSingleProduct';
import AdminContainer from './AdminContainer';
import AdminAddProductContainer from '../containers/AdminAddProductContainer';
import AdminManejarProductos from './AdminManejarProductos';
import AdminEditProductContainer from './AdminEditProductContainer';
import AdminUsersContainer from './AdminUsersContainer';
import AdminOrdenes from '../components/AdminOrdenes';
import AdminSingleOrder from '../components/AdminSingleOrder';
import AdminAddCategoryContainer from './AdminAddCategoryContainer';
import AdminProductos from '../components/AdminProductos';
import CheckoutContainer from '../containers/CheckoutContainer';
import AdminAddCategoryToProductContainer from './AdminAddCategoryToProductContainer';
import AdminOrdenesContainer from '../containers/AdminOrdersContainer'
// import EditCategoriaDeProducto from './EditCategoriaDeProducto';

import UserPerfilContainer from './UserPerfilContainer';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logginSuccess: user => {
      dispatch(logginSuccess(user));
    },
  };
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      logueado: false,
    };
    this.sign = this.sign.bind(this);
    this.logn = this.logn.bind(this);
  }

  sign(object) {
    return axios.post('/api/user/signup', object);
  }
  logn(object) {
    axios.post('/api/login', object)
      .then(res => console.log(res.data));
  }
  componentDidMount() {
    axios.get('/api/user/me')
      .then((response) => {
        this.props.logginSuccess(response.data)
      })
  }

  render() {
    return (
      <div>
        <CarritoSlider cart={this.props.cart} />
        <Route
          path="/*"
          render={props => <NavBar {...props} admin={this.state.admin} />}
        />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" render={props => <SignUp {...props} sign={this.sign} />} />
        <Route exact path="/login" render={(props) => <Login {...props} logout={this.logout} logn={this.logn} />} />
        <Route path="/productos" component={Productos} />
        <Route exact path="/admin" component={AdminContainer} />
        <Route exact path="/admin/agregarProducto" component={AdminAddProductContainer} />
        <Route exact path="/admin/adminListaProductos" component={AdminManejarProductos} />
        <Route exact path="/admin/agregarCategoria" component={AdminAddCategoryContainer} />
        <Route exact path="/admin/verOrdenes" component={AdminOrdenesContainer} />
        <Route exact path="/admin/verOrden" component={AdminSingleOrder} />
        <Route
          exact
          path="/checkout/"
          render={props => <CheckoutContainer {...props} />}
        />
        <Route exact path="/admin/users/" component={AdminUsersContainer} />
        <Route exact path="/admin/EditarProducto/:id" component={AdminEditProductContainer} />
        <Route exact path="/admin/editCategoriasProducto/:id" component={AdminAddCategoryToProductContainer} />
        <Route exact path="/user/profile" component={UserPerfilContainer} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
