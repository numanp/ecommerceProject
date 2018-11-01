import React from 'react'
import { Link } from 'react-router-dom';

export default () => {
    return(
        <nav className="navbar navbar-default">
        <Link to="/carrito">CARRITO</Link>
            <div className="container">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="/" className="navbar-brand"><img src="./images/mercadonuma.png"></img></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Regístrate</a></li>
                    <li><a href="#">Ingresa</a></li>
                    <li><a className="glyphicon glyphicon-question-sign" href="https://www.mercadolibre.com.ar/ayuda" target="_blank"></a></li>
                    </ul>
                    </div>
            </div>
            </div>
        </nav>
    )
}
