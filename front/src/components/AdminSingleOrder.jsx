import React, { Component } from 'react'

export default class AdminSingleOrder extends Component {
    constructor(props){
        super(props)
    }

    render() {
      return (
        <div className="container-fluid" id='verOrdenesAdmin'>
        <div className="container">
        <div className="jumbotron">
        <h1 className="text-center">Detalles de la orden</h1>
        {
            
            this.props.carrito.length > 0  ?
            this.props.carrito.map( carrito => (
                <div key={carrito.id} className="verOrdenesIndividual">
                <div className="col-md-3">
                    <img src={carrito.imagenSingle1} alt=""/>
                    {console.log(carrito)}
                </div>
                    <div className="col-md-4">
                        <h2>Producto: </h2>
                        <h2><b>{carrito.descripcion}</b></h2>
                        <p>ID: {carrito.id}</p>
                    </div>
                    {/*}<p>Disponibildad: {carrito.disponibipdad}</p> */}
                    <div className="col-md-4">
                    <p>Precio: {carrito.precio}</p>
                    <p>Cantidad: {carrito.q}</p>
                    <p>Total: <b>${ parseInt(carrito.precio) * parseInt(carrito.q)} </b></p>
                    </div>
                </div>
                
                
                ))
                : null
            }

        </div>
        </div>
    </div>
    )
  }
}