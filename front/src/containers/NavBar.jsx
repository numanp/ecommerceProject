import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import {
  removeLoginFromLocalStorage,
  fetchCategorys,
} from '../redux/action-creators/user';
import {
  getProductsByName,
  fetchProductsByCategory,
} from '../redux/action-creators/products';

function mapStateToProps(state, ownProps) {
  //console.log(ownProps, 'STATE NAVBAR');
  return {
    user: state.user,
    history: ownProps.history,
    categorias: state.userAdmin.listaCategorias,
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
    fetchCategorys: () => {
      dispatch(fetchCategorys());
    },
    fetchProductsByCategory: id => {
      dispatch(fetchProductsByCategory(id));
    },
  };
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreProducto: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handelOnKeyPress = this.handelOnKeyPress.bind(this);
  }
  componentDidMount() {
    this.props.fetchCategorys();
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
    setTimeout(() => {
      console.log(this.props.categorias);
    }, 10);
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
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                <img src="./images/skereeteam.png" />
              </Link>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Categorias
                <span className="caret" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                {this.props.categorias.map(categoria => {
                  return (
                    <li
                      onClick={() => {
                        this.props.fetchProductsByCategory(categoria.id);
                      }}
                    >
                      {' '}
                      {categoria.nombre}{' '}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul key="1" className="nav navbar-nav navbar-left" key="1">
                <SearchBar
                  handleChange={this.handleChange}
                  handleOnClick={this.handleOnClick}
                  handelOnKeyPress={this.handelOnKeyPress}
                />
              </ul>
              {this.state.logueado === true
                ? [
                    <ul key="2" className="nav navbar-nav navbar-right">
                      <li>
                        <Link to="/login" onClick={() => this.props.logout()}>
                          Logout
                        </Link>
                      </li>
                      <li>
                        <Link to="/carrito">Carrito</Link>
                      </li>
                    </ul>,
                  ]
                : [
                    <ul key="3" className="nav navbar-nav navbar-right">
                      <li>
                        <Link to="/signup">Registrate</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/carrito">Carrito</Link>
                      </li>
                    </ul>,
                  ]}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
