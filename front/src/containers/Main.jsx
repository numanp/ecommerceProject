import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar'
import LandingPage from './LandingPage'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <NavBar />
                <LandingPage />
            </div>
        );
    }
}

export default Main;