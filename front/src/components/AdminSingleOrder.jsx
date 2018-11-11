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
                    <ul key={carrito.id}>
                        <li>Creado: {carrito.createdAt}</li>
                        <li>Descripcion: {carrito.descripcion}</li>
                        <li>Disponibildad: {carrito.disponibilidad}</li>
                        <li>Foto: {carrito.foto}</li>
                        <li>ID: {carrito.id}</li>
                        <li>Nombre: {carrito.nombre}</li>
                        <li>Precio: {carrito.precio}</li>
                        <li>Cantidad: {carrito.q}</li>
                        <li>Stock: {carrito.stock}</li>
                    </ul>
                    
            ))
            : null
        }

        </div>
    </div>
    )
  }
}
