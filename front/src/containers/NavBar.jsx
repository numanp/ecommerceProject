import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { removeLoginFromLocalStorage } from '../redux/action-creators/user';
import { getProductsByName } from '../redux/action-creators/products';

function mapStateToProps(state, ownProps) {
  //console.log(ownProps, 'STATE NAVBAR');
  return {
    user: state.user,
    history: ownProps.history,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => {
      dispatch(removeLoginFromLocalStorage());
    },
    getProductsByName: nombre => {
      dispatch(getProductsByName(nombre));
    },
  };
}

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombreProducto: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handelOnKeyPress = this.handelOnKeyPress.bind(this);
  }
  componentDidMount() {
    // console.log(this.state, 'estado interno navbar');
    var objeto = sessionStorage.getItem('login');
    if (!!objeto) {
      this.setState({
        logueado: true,
      });
    } else {
      this.setState({
        logueado: false,
      });
    }
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      nombreProducto: value,
    });
    console.log(this.state.nombreProducto, 'STATE NOMBRE HANDLECHANGE');
  }

  handleOnClick() {
    this.props.getProductsByName(this.state.nombreProducto);
    this.props.history.push('/productos');
  }

  handelOnKeyPress(event) {
    if (event.key == 'Enter') {
      this.handleOnClick();
    }
  }

  render() {
    // console.log(this.state.logueado)
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
                <img src="./images/skereeteam.png"></img>
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul key="1" className="nav navbar-nav navbar-left" key="1">
                <SearchBar handleChange={this.handleChange} handleOnClick={this.handleOnClick} handelOnKeyPress={this.handelOnKeyPress} />
              </ul>
              {
                this.state.logueado === true ?
                  [
                    <ul key="2" className="nav navbar-nav navbar-right">
                      <li> <Link to="/login" onClick={() => this.props.logout()}>Logout</Link></li>
                      <li> <Link to="/carrito">Carrito</Link> </li>
                    </ul>
                  ] :
                  [
                    <ul key="3" className="nav navbar-nav navbar-right">
                      <li> <Link to="/signup">Registrate</Link></li>
                      <li> <Link to="/login">Login</Link></li>
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

