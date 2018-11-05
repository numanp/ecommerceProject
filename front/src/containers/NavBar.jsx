import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchBar from './SearchBar'
import { removeLoginFromLocalStorage } from '../redux/action-creators/user'

function mapStateToProps(state) {
    return {
        loggedIn: state
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        logout: () => {
            dispatch(removeLoginFromLocalStorage())
        }
    }
}

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            logueado: {}
        }
    }

    componentDidMount() {
        var objeto = localStorage.getItem('login')
        if (!!objeto) {
            this.setState({
                logueado: true
            })
        } else {
            this.setState({
                logueado: false
            })
        }
    }

    render() {
        console.log(this.state.logueado)
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
                        <li> <Link to="/signup">Registrate</Link></li>
                        {
                            this.state.logueado === true ?
                            <li> <Link to="/login" onClick={() => this.props.logout()}>Logout</Link></li>
                            :
                            <li> <Link to="/login">Login</Link></li>
                        }
                        <li> <Link to="/carrito">Carrito</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

// this.props.loggedIn.user.loggedIn

// Object.keys(this.state.logueado).length === 0


















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
