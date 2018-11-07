//DEPENDENCIAS
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//COMPONENTES
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import axios from 'axios';
import Productos from './ProductosContainer';
import Carrito from './CarritoContainer';
import SingleProduct from './ContainerSingleProduct';
import AdminContainer from './AdminContainer';
import AdminAddProductContainer from '../containers/AdminAddProductContainer';
import AdminOrdenes from '../components/AdminOrdenes';
import AdminAddCategoryContainer from './AdminAddCategoryContainer';
import AdminProductos from '../components/AdminProductos';
import AdminManejarProductos from './AdminManejarProductos';
import AdminEditProductContainer from './AdminEditProductContainer';
import AdminUsersContainer from './AdminUsersContainer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      logueado: false,
    };
    this.sign = this.sign.bind(this);
    this.logn = this.logn.bind(this);
    this.logout = this.logout.bind(this);
  }
  sign(object) {
    return axios.post('api/user/signup', object);
  }
  logn(object) {
    axios.post('api/login', object).then(res => console.log(res.data));
  }
  logout() {
    axios.post('api/logout').then(res => console.log(res.data));
  }
  componentDidMount() {
    axios.get('api/user/me').then(response => {
      this.setState({
        login: response.admin,
      });
      console.log(response);
    });
    localStorage.setItem('hola', 'man');
  }
  render() {
    return (
      <div>
        <NavBar admin={this.state.admin} />
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/signup"
          render={props => <SignUp {...props} sign={this.sign} />}
        />
        <Route
          exact
          path="/login"
          render={() => <Login logout={this.logout} logn={this.logn} />}
        />
        <Route path="/productos" component={Productos} />
        <Route exact path="/carrito" component={Carrito} />
        {/*        <Route exact path="/singleProduct" component={SingleProduct} /> */}
        {
          //RUTAS DEL ADMIN
        }
        <Route exact path="/admin" component={AdminContainer} />
        <Route
          exact
          path="/admin/agregarCategoria"
          component={AdminAddCategoryContainer}
        />

        <Route exact path="/admin/verOrdenes" component={AdminOrdenes} />
        {/* <Route exact path="/admin/promoveUser" component={PromoveUser} />
        <Route exact path="/admin/deleteUser" component={DeleteUser} /> */}
        <Route
          exact
          path="/admin/agregarProducto"
          component={AdminAddProductContainer}
        />
        <Route
          exact
          path="/admin/agregarCategoria"
          component={AdminAddCategoryContainer}
        />
        <Route exact path="/admin/verOrdenes" component={AdminOrdenes} />
        <Route
          exact
          path="/admin/adminListaProductos"
          component={AdminManejarProductos}
        />
        <Route
          exact
          path="/admin/EditarProducto/:id"
          component={AdminEditProductContainer}
        />
        <Route exact path="/admin/users/" component={AdminUsersContainer} />
      </div>
    );
  }
}

export default Main;
