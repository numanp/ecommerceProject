import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { removeLoginFromLocalStorage, fetchCategorys } from '../redux/action-creators/user';
import { getProductsByName, fetchProductsByCategory } from '../redux/action-creators/products';
function mapStateToProps(state, ownProps) {
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
      admin: false
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
        admin: JSON.parse(objeto).admin
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
    // console.log(this.state.nombreProducto, 'STATE NOMBRE HANDLECHANGE');
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
    return (
      <nav className="navbar navbar-default navbar-inverse">
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
                <img src="/images/logo1.png"></img>
              </Link>
            </div>
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul key="1" className="nav navbar-left navbar-nav" key="1">
                    <SearchBar handleChange={this.handleChange} handleOnClick={this.handleOnClick} handelOnKeyPress={this.handelOnKeyPress} />
                    <div className="dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Categorias
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            {
                            this.props.categorias.map((categoria) => {
                                return (
                                <li key={categoria.id} onClick={() => { this.props.fetchProductsByCategory(categoria.id) }}> {categoria.nombre} </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                {
                  this.state.logueado ?
                    <li>
                      <Link to="/login" onClick={() => this.props.logout()}>
                        Logout
                      </Link>
                    </li>
                    :
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <Link to="/signup">Registrate</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>                    
                    </ul>
                }

                {
                   this.state.admin ? 
                     <li> <Link to="/admin/"> Panel Admin </Link> </li>
                   : null
                 }
                 {
                   this.state.logueado === true && !this.state.admin ?
                   <li> <Link to="/user/profile"> Mi Cuenta </Link> </li>
                   : null
                 }
                 
                 <li>
                          <Link to="/productos">Productos</Link>
                       </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
