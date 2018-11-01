import React from 'react';
import Sidebar from '../components/SideBar';
//import store from '../store'; A IMPORTAR MAS TARDE

export default class SidebarContainer extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
             <Sidebar />
            )
    }
}
