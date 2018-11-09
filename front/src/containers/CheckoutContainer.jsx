import React, { Component } from 'react';
import {connect} from 'react-redux'

class CheckoutContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    //MANEJA FORMULARIO PARA AGREGAR PRODUCTO

    render() {
        return (
            <div className="container" id="checkOutContaier">
                <div className="contenedorCheckout">
                    <div className='col-md-4 checkoutForm'>
                        <div>
                            <h2>Detalle de productos</h2>
                        </div>
                        <div>
                            <ul>
                                <li> Producto 1 </li>
                                <li> Producto 2 </li>
                                <li> Producto 3 </li>
                                <li> Producto 4 </li>
                                <li> Producto 5 </li>
                            </ul>                        
                        </div>
                        <div>
                            <h3>Fecha: </h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="texto">Direccion de entrega</label>
                            <input type="texto" className="form-control" id="email" name="direccion" placeholder="Direccion"/>
                        </div>
                        <h2>Monto total: </h2>




                    </div>
                    <div className='col-md-4 checkoutForm'>
                        <h2>Detalles del pago</h2>
                        <form>
                        <div className="form-group">
                            <label htmlFor="email">Nombre de tarjeta</label>
                            <input type="email" className="form-control" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tarjeta">Tarjeta</label>
                            <input autoComplete="off" type="password" className="form-control"  placeholder="Password"/>
                        </div>
                        <div className="datos">
                            <div className="form-group">
                                <label htmlFor="tarjeta">Expiration Date</label>
                                <input type="text" className="form-control checkoutExpiracion"  placeholder="FECHA EXPIRACION"/>
                            </div>
                            <div className="form-group cvvcheckout">
                            <label htmlFor="tarjeta">CVV</label>
                                <input type="text" className="form-control "  placeholder="FECHA EXPIRACION"/>
                            </div>
                        </div>
                
                        <button type="submit" className="btn btn-success btn-block btn-lg">Realizar Compra</button>
                    
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: function (producto) {
            dispatch(addProduct(producto))
        },
        fetchCategorys: function (categorias) {
            dispatch(fetchCategorys(categorias))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);