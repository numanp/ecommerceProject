import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, addQtoProduct, lessQtoProduct } from '../redux/action-creators/cart'
import { actualizarCarro, saveCart, getMyCart, emptyCart } from '../redux/action-creators/cart'
import { Link } from 'react-router-dom';




function mapStateToProps(state, ownProps) {
    return {
        cart: state.cart,
        logged: state.user.logged
    }
}
function mapDispatchToprops(dispatch, ownProps) {
    return {
        removeFromCart: (id) => {
            dispatch(removeFromCart(id))
        },
        addQtoProduct: (id) => {
            dispatch(addQtoProduct(id))
        },
        lessQtoProduct: (id) => {
            dispatch(lessQtoProduct(id))
        },
        actualizarCarro: (arreglo) => {
            dispatch(actualizarCarro(arreglo))
        },

    }
}
class CarritoSlider extends Component {
    constructor(props) {
        super(props)
        /* this.updateCart = this.updateCart.bind(this); */
    }
    componentDidMount() {
    }
    /*  updateCart() {
         var storage = JSON.parse(localStorage.getItem("cart"));
         this.cartProducts = storage
 
     } */
    render() {
        return (
            <div>
                <div className="wrapper-sidebar" onClick={() => { /* this.updateCart(); this.forceUpdate() */ }}>
                    <nav id="sidebar-skeree" className="active" >
                        <div className="sidebar-header">
                            <img src="./images/skereeteam.png" />
                        </div>
                        <ul className="list-unstyled components">
                            <li className="active">
                                <a href="#homeSubmenu" data-toggle="collapse" className="dropdown-toggle">Carrito</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    {
                                        this.props.cart && this.props.cart.map(product => {
                                            return (
                                                <li key={product.id} className="li-sidebarSkeree">
                                                    <a className="a-carritoSlider" href="#">{product.nombre} - Cantidad:{product.q}-Subtotal:{product.precio * product.q}</a>
                                                    <div className="btn-group" role="group" aria-label="...">
                                                        <button type="button" className="btn btn-warning" onClick={() => { this.props.lessQtoProduct(product.id); localStorage.setItem('cart', JSON.stringify(this.props.cart)) }} >Restar</button>
                                                        <button type="button" className="btn btn-danger" onClick={() => { this.props.removeFromCart(product.id); setTimeout(() => { localStorage.setItem('cart', JSON.stringify(this.props.cart)) }, 10) }}>Eliminar</button>
                                                        <button type="button" className="btn btn-success" onClick={() => { this.props.addQtoProduct(product.id); localStorage.setItem('cart', JSON.stringify(this.props.cart)) }}>Sumar</button>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <br></br>
                            </li>
                            {
                                this.props.logged == 'no estas logeado' ?
                                    [
                                        <Link key={1} to={'/login'} role="button" className="btn btn-success comprar-carrito-btn">Loguearte para comprar</Link>
                                    ] :
                                    [
                                        <div key={2}>
                                            <Link to={'/checkout'} role="button" className="btn btn-success comprar-carrito-btn">Checkout</Link>
                                            <br></br>
                                            <br></br>
                                            <button onClick={() => { saveCart(localStorage.getItem('cart'), this.props.logged.id) }} className="btn btn-success comprar-carrito-btn">Guardar carrito</button>
                                            <br></br>
                                            <br></br>
                                            <button onClick={() => { getMyCart(this.props.logged.id); this.props.actualizarCarro(JSON.parse(localStorage.getItem('cart'))) }} className="btn btn-success comprar-carrito-btn">Continuar compra guardada</button>
                                        </div>
                                    ]
                            }
                        </ul>
                    </nav>
                    <div id="content-carrito">
                        <nav className="navbar-sidebar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" id="sidebarCollapse" className="navbar-btn active">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(CarritoSlider)
