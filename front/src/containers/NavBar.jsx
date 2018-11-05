import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    };
}

function mapDispatchToProps(state) {

    return {

    };
}

class NavBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">
                                <img src="./images/mercadonuma.png"></img>
                            </Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-left">
                                <SearchBar />
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li> <Link to="/signup">Registrates</Link></li>
                                <li> <Link to="/login">Login</Link></li>
                                <li> <Link to="/carrito">Carrito</Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect(
    mapStateToProps,
)(NavBar);





















// import React from 'react'

// export default () => {
//     return(
//         <nav className="navbar navbar-default">
//             <div className="container">
//             <div className="container-fluid">
//                 <div className="navbar-header">
//                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//                     <span className="sr-only">Toggle navigation</span>
//                     <span className="icon-bar"></span>
//                     <span className="icon-bar"></span>
//                     <span className="icon-bar"></span>
//                 </button>
//                 <a href="ver-todo.html" className="navbar-brand"><img src="./images/mercadonuma.png"></img></a>
//                 </div>

//                 <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//                 <ul className="nav navbar-nav navbar-right">
//                     <li><a href="#">Regístrate</a></li>
//                     <li><a href="#">Ingresa</a></li>
//                     <li><a className="glyphicon glyphicon-question-sign" href="https://www.mercadolibre.com.ar/ayuda" target="_blank"></a></li>
//                 </ul>
//                 </div>
//             </div>
//             </div>
//         </nav>
//     )
// }
