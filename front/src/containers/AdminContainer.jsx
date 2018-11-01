import React from 'react';
//import store from '../store'; A IMPORTAR MAS TARDE
import AdminComponent from '../components/AdminComponent';

export default class AdminContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return <AdminComponent/>;
    }
}
