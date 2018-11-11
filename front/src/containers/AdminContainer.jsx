import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

//COMPONENTES
import AdminComponent from '../components/AdminComponent';
import AdminSingleOrder from '../components/AdminSingleOrder'

class AdminContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedCarritoById: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOrderById = this.handleOrderById.bind(this)
  }

  //MANEJA FORMULARIO PARA AGREGAR PRODUCTO
  handleSubmit(evt) {
    evt.preventDefault();
    const formulario = this.state.valorInput;
    if (formulario.length < 5) {
      console.log('ESTOY PUDIENDO SUBMITEAR');
    }
  }

  handleOrderById(e) {
    e.preventDefault();
    let id = e.target.ID.value

    axios.get(`/api/ventas/`)
    .then(res => res.data)
    .then(ordenesTotales => {
        var carrito = []
        for (var i = 0; i < ordenesTotales.length; i++) {
            if (ordenesTotales[i].id == id) {
                carrito.push(JSON.parse(ordenesTotales[i].carro));
            }
        }
        this.setState({ selectedCarritoById: carrito[0] })
    })
  }

  render() {
    return (
      <div>
          {
            this.state.selectedCarritoById.length > 0 ?
            <AdminSingleOrder carrito={this.state.selectedCarritoById}/>
            :
            <AdminComponent handleSubmit={this.handleSubmit} handleOrderById={this.handleOrderById}/>
          }
      </div>
    );
  }
}

export default AdminContainer;
