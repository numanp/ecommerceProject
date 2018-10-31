import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import SidebarContainer from './SidebarContainer';
import ProfileContainer from './ProfileContainer';
import AdminComponent from '../components/AdminComponent';
import AdminAddProduct from '../components/AdminAddProduct';
import AdminEditProduct from '../components/AdminEditProduct';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>

                <NavBar/>
                <AdminComponent/>
                <hr/>
                <AdminAddProduct/>
                <hr/>
                <br/>
                <AdminEditProduct/>
            </div>
        );
    }
}

export default Main;
