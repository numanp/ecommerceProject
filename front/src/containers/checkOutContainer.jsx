import React, { Component } from 'react';
import {connect} from 'react-redux'

class checkOutContainer extends Component {
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
                    <div className='col-md-4 IMGCHECKOUT'>
                    
                    </div>
                        <div className='col-md-4 checkoutForm'>
                            <h2>Total a pagar: 100</h2>
                            <form>
                            <div class="form-group">
                                <label for="email">Nombre de tarjeta</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label for="tarjeta">Tarjeta</label>
                                <input type="password" class="form-control" id="tarjeta" placeholder="Password"/>
                            </div>
                            <div className="datos">
                                <div class="form-group">
                                    <label for="tarjeta">Expiration Date</label>
                                    <input type="text" class="form-control checkoutExpiracion" id="tarjeta" placeholder="FECHA EXPIRACION"/>
                                </div>
                                <div class="form-group cvvcheckout">
                                <label for="tarjeta">CVV</label>
                                    <input type="text" class="form-control " id="tarjeta" placeholder="FECHA EXPIRACION"/>
                                </div>
                            </div>
                    
                            <button type="submit" class="btn btn-success btn-block btn-lg">Submit</button>
                        
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



export default connect(mapStateToProps, mapDispatchToProps)(checkOutContainer);