import React, { Component } from 'react';
import { connect } from 'react-redux';



function mapStateToProps(state, ownProps) {
    return {
        prods: state.cart
    }
}

function mapDispatchToprops(dispatch, ownProps) {

    return {
    }
}

class CarritoSlider extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="wrapper-sidebar">
                    <nav id="sidebar-skeree" className="active" >
                        <div className="sidebar-header">
                            <img src="/images/skereeteam.png" />
                        </div>

                        <ul className="list-unstyled components">
                            <li className="active">
                                <a href="#homeSubmenu" data-toggle="collapse" className="dropdown-toggle">Carrito</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    {
                                        /*  this.props.cart && this.props.cart.map(product => {
                                             return (
                                                 <li key={product.id} className="li-sidebarSkeree">
                                                     <a className="a-carritoSlider" href="#">HOLA</a>
                                                 </li>
 
                                             )
                                         }) */
                                    }

                                </ul>
                            </li>
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