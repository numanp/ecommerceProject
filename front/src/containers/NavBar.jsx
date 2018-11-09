import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar'
import { removeLoginFromLocalStorage } from '../redux/action-creators/user'

function mapStateToProps(state) {
    return {
        user: state.user
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
    constructor(props) {
        super(props)
        this.state = {
            logueado: {}
        }
    }
    componentDidMount() {
        var objeto = sessionStorage.getItem('login')
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
                                <img src="/images/skereeteam.png"></img>
                            </Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul key="1" className="nav navbar-nav navbar-left" key="1">
                                <SearchBar />
                            </ul>
                            {
                                this.state.logueado === false ?
                                    [

                                        <ul key="3" className="nav navbar-nav navbar-right">
                                            <li> <Link to="/signup">Registrate</Link></li>
                                            <li> <Link to="/login">Login</Link></li>
                                            <li> <Link to="/carrito">Carrito</Link> </li>
                                        </ul>
                                    ] :
                                    [
                                        <ul key="2" className="nav navbar-nav navbar-right">
                                            <li> <Link to="/login" onClick={() => this.props.logout()}>Logout</Link></li>
                                            <li> <Link to="/carrito">Carrito</Link> </li>
                                        </ul>
                                    ]
                            }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)














