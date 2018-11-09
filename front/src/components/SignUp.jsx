import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      telefono: '',
    };
    this.nombreChange = this.nombreChange.bind(this);
    this.apellidoChange = this.apellidoChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.telefonoChange = this.telefonoChange.bind(this);
  }
  nombreChange(e) {
    this.setState({
      nombre: e.target.value,
    });
  }
  apellidoChange(e) {
    this.setState({
      apellido: e.target.value,
    });
  }
  emailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  passwordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  telefonoChange(e) {
    this.setState({
      telefono: e.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid" id="loginFormulario">
        <div className="container">
          <div className="col-md-4 col-md-offset-4">
            <h1>Sign Up</h1>
            <div className="loginForm">
              <form
                onSubmit={event => {
                  event.preventDefault();
                  this.props
                    .sign(this.state)
                    .then(answer => {
                      console.log({ answer });
                      if (answer.status === 200) {
                        this.props.history.push('/login');
                      }
                    })
                    .catch(err => console.log('entra al error', err));
                }}
              >
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    onChange={e => this.nombreChange(e)}
                    type="text"
                    name="ombre"
                    placeholder="Nombre"
                    className="form-control"
                  />
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">Apellido</label>
                  <input
                    onChange={e => this.apellidoChange(e)}
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="form-control"
                  />
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">Email</label>
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
                  <label htmlFor="nombre">Password</label>
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
                <div className="form-group">
                  <label htmlFor="nombre">Telefono</label>
                  <input
                    onChange={e => this.telefonoChange(e)}
                    type="text"
                    name="telefono"
                    placeholder="Telefono"
                    className="form-control"
                  />
                  <br />
                  <br />
                </div>

                <button className="btn btn-success btn-block" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
