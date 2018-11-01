import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './containers/LandingPage'
import Productos from './containers/ProductosContainer'
import Carrito from './containers/Carrito'

const Router = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/productos' component={Productos} />
        <Route exact path='/carrito' component={Carrito} />
    </Switch>
)

export default Router;