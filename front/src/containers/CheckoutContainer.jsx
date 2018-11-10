import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { emptyCart } from '../redux/action-creators/cart'

class CheckoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            direccion: '',
            cartTosave: JSON.stringify(this.props.carro),
            total: this.total,
        };
    }
    emailChange(e) {
        this.setState({
            email: e.target.value,
        });
    }
    direccionChange(e) {
        this.setState({
            direccion: e.target.value,
        });
    }
    sendVenta() {
        axios.post('/api/ventas', this.obj)
            .then(() => console.log('orden creada'))
            .then(() => {
                var arrProds = JSON.parse(this.obj.carro)
                var productos = []
                arrProds.map((prod) => productos.push(prod.nombre))
                axios.post('/api/ventas/email', { productos: productos, email: this.obj.email })
                    .then((res) => { console.log(res) })
                this.props.history.push('/')
                localStorage.setItem('cart', JSON.stringify([]))
            })
    }

    render() {
        this.fecha = Date()
        this.fechaArr = this.fecha.split(" ")
        this.total = 0
        this.props.carro.map((prod) => this.total += prod.precio * prod.q)
        this.obj = {
            status: 'creado',
            fecha: this.fecha,
            importe: this.total,
            direccion: this.state.direccion,
            email: this.state.email,
            carro: this.state.cartTosave,
            userId: this.props.user.id
        }
        return (
            <div className="container" id="checkOutContaier">
                <div className="contenedorCheckout">
                    <div className='col-md-4 checkoutForm'>
                        <div>
                            <h2>Detalle de productos</h2>
                        </div>
                        <div>
                            <ul>
                                {
                                    this.props.carro && this.props.carro.map(product => {
                                        return (<div key={product.id}>
                                            <li key={product.id}> {product.nombre} -  $ {product.precio * product.q} </li>
                                        </div>)
                                    })
                                }



                            </ul>
                        </div>
                        <div>
                            <h3>Fecha: {this.fechaArr[2]} {this.fechaArr[1]} {this.fechaArr[3]}</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="texto">Direccion de entrega</label>
                            <input onChange={e => this.direccionChange(e)} type="texto" className="form-control" id="email" name="direccion" placeholder="Direccion" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="texto">Email</label>
                            <input onChange={e => this.emailChange(e)} type="texto" className="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                        <h2>Monto total: ${this.total}</h2>




                    </div>
                    <div className='col-md-4 checkoutForm'>
                        <h2>Detalles del pago</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="email">Nombre de tarjeta</label>
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tarjeta">Tarjeta</label>
                                <input autoComplete="off" type="password" className="form-control" />
                            </div>
                            <div className="datos">
                                <div className="form-group">
                                    <label htmlFor="tarjeta">Expiration Date</label>
                                    <input type="text" className="form-control checkoutExpiracion" placeholder="FECHA EXPIRACION" />
                                </div>
                                <div className="form-group cvvcheckout">
                                    <label htmlFor="tarjeta">CVV</label>
                                    <input type="text" className="form-control " placeholder="FECHA EXPIRACION" />
                                </div>
                            </div>

                            <button onClick={() => { this.sendVenta(); this.props.emptyCart() }} className="btn btn-success btn-block btn-lg">Realizar Compra</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        carro: state.cart,
        user: state.user.logged,
        history: ownProps.history
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
        emptyCart: () => {
            dispatch(emptyCart())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);