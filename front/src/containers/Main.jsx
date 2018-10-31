import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import SidebarContainer from './SidebarContainer';
import ProfileContainer from './ProfileContainer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <SidebarContainer />
                <ProfileContainer />
            </div>
        );
    }
}

export default Main;
