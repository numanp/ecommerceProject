import React, { Component} from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

var arregloCompras = [
  {
      idVenta: 1,
      productos: [10,20,30],
      fechaVenta: '10:25PM',
      status: 'Completado',
      linkProducto: '#'
  },{
      idVenta: 3,
      productos: [10,20,30],
      fechaVenta: '10:25PM',
      status: 'incompleto',
      linkProducto: '#'
  },
  ,{
      idVenta: 4,
      productos: [10,20,30],
      fechaVenta: '10:25PM',
      status: 'incompleto',
      linkProducto: '#'
  },
]
class CheckoutContainer extends Component {
  render() {
    return (
      <div  className="container-fluid container" id="">
      <h1>Manejo de ordenes</h1>
      
      {
          //DROPDOWN PARA FILTRAR LAS CATEGORIAS
      }
      <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filtrar por Status <span class="caret"></span>
           </button>
              <ul class="dropdown-menu">
                  <li><a href="#">CREADO</a></li>
                  <li><a href="#">PROCESADO</a></li>
                  <li><a href="#">CANCELADO</a></li>
                  <li><a href="#">COMPLETADO</a></li>
             </ul>
      </div>
  
  
      { //MAPEO POR EL ARREGLO DE COMPRAS
          arregloCompras.map(compra => (
              <div className="profile_compra"  key={compra.idVenta}>
                  <a href={compra.linkProducto}>
                      <img src="https://cdn.jysk.es/media/catalog/product/cache/9/thumbnail/960x/163b81649b7ef7bc8a00b0066e59ae0a/u/n/unbenannt-1_947.jpg" alt=""/>
                  </a>
                  <p>INFO DE LA VENTA.</p>
                  <p>ID VENTA: {compra.idVenta}</p>
                  <p>Fecha: {compra.fechaVenta}</p>
                  <p>Status: {compra.status}</p>    
                  <p class="profile_celeste">Ver Detalle (OTRO COMPONENTE QUE MUESTRE TODOS LOS PRODUCTOS COMPRADOS EN LA VENTA)</p>
                  <button class="btn btn-primary">Cambiar el Status</button>
              </div>
          ))
      }
  
  </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)



