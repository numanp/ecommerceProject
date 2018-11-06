
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//COMPONENTES
import AdminComponent from '../components/AdminComponent';

class AdminContainer extends Component {
    constructor() {
        super();
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //MANEJA FORMULARIO PARA AGREGAR PRODUCTO
    handleSubmit(evt) {
        evt.preventDefault();
        const formulario = this.state.valorInput;
        if (formulario.length < 5) {
        }
    }

    render() {
        return (
            <div>
                <AdminComponent handleSubmit={this.handleSubmit}/>
            </div>   

        )
    }
}
export default AdminContainer;