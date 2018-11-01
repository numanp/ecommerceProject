import React, { Component } from 'react';

import Router from '../Router'
import NavBar from './NavBar'

class Main extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Router /> 
            </div>
        );
    }
}

export default Main;
