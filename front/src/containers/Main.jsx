import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import SingleProduct from './ContainerSingleProduct';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/singleProduct" component={SingleProduct} />
      </div>
    );
  }
}

export default Main;
