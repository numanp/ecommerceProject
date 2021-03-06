import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLoginToLocalStorage } from '../redux/action-creators/user';
import { getMyCart, actualizarCarro } from '../redux/action-creators/cart'

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.user.logged,
    history: ownProps.history,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: user => {
      dispatch(addLoginToLocalStorage(user));
    },
    getCart: (carro) => {
      dispatch(actualizarCarro(carro))
    }
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.logn = this.logn.bind(this)
  }
  componentDidMount() {
    setTimeout(() => { this.props.getCart(JSON.parse(localStorage.getItem('cart'))); if (this.props.loggedIn.id) this.props.history.push('/productos') }, 10)
  }
  emailChange(e) {
    this.setState(
      {
        email: e.target.value
      }
    )
  }
  passwordChange(e) {
    this.setState(
      {
        password: e.target.value
      }
    )
  }

  logn(object) {
    this.props.logginSuccess(object);
  }

  render() {
    return (
      <div className="container-fluid" id="loginFormulario">
        <div className="container">
          <div className="col-md-4 col-md-offset-4">
            <h1>Sign In</h1>
            <div className="loginForm">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  this.props.login(this.state);
                }}
              >
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    onChange={e => this.emailChange(e)}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <input
                    onChange={e => this.passwordChange(e)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  <br />
                  <br />
                </div>

                <button className="btn btn-primary btn-block" type="submit">
                  Login
                </button>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);