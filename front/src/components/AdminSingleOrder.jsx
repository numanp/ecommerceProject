import React, { Component } from 'react'

export default class AdminSingleOrder extends Component {
    constructor(props){
        super(props)
    }

    render() {
      return (
        <div className="container">
        <div className="jumbotron">
        <h1>Detalles de la orden</h1>
        {
        
            this.props.carrito.length > 0  ?
            this.props.carrito.map( carrito => (
                <div key={carrito.id}>
                    <p>Creado: {carrito.createdAt}</p>
                    <p>Descripcion: {carrito.descripcion}</p>
                    <p>Disponibildad: {carrito.disponibipdad}</p>
                    <p>Foto: {carrito.foto}</p>
                    <p>ID: {carrito.id}</p>
                    <p>Nombre: {carrito.nombre}</p>
                    <p>Precio: {carrito.precio}</p>
                    <p>Cantidad: {carrito.q}</p>
                    <p>Stock: {carrito.stock}</p>
                </div>
                
                    
            ))
            : null
        }

        </div>
    </div>
    )
  }
}
