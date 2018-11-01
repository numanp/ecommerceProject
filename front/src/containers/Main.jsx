import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import axios from 'axios';
import Productos from './ProductosContainer';
import Carrito from './Carrito';
import SingleProduct from './ContainerSingleProduct';
import AdminContainer from './AdminContainer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.sign = this.sign.bind(this);
    this.logn = this.logn.bind(this);
    this.logout = this.logout.bind(this);
  }
  sign(object) {
    axios.post('api/signup', object);
  }
  logn(object) {
    axios.post('api/login', object).then(res => console.log(res.data));
  }
  logout() {
    axios.post('api/logout').then(res => console.log(res.data));
  }
  componentDidMount() {
    // axios.get('/api/me')
    //     .then((user) => { console.log('THIS IS ME ', user) })
    //     .catch(console.log)
  }
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" render={() => <SignUp sign={this.sign} />} />
        <Route exact path="/login" render={() => <Login logout={this.logout} logn={this.logn} />} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/singleProduct" component={SingleProduct} />
        <Route exact path="/admin" component={AdminContainer} />
      </div>
    );
  }
}

export default Main;
