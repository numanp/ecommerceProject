import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            telefono: ''
        }
        this.nombreChange = this.nombreChange.bind(this);
        this.apellidoChange = this.apellidoChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.telefonoChange = this.telefonoChange.bind(this);
    }
    nombreChange(e) {
        this.setState(
            {
                nombre: e.target.value
            }
        )
    }
    apellidoChange(e) {
        this.setState(
            {
                apellido: e.target.value
            }
        )
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
    telefonoChange(e) {
        this.setState(
            {
                telefono: e.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={() => this.props.sign(this.state)} >
                    <input onChange={(e) => this.nombreChange(e)} type="text" name="nombre" placeholder="nombre" /><br /><br />
                    <input onChange={(e) => this.apellidoChange(e)} type="text" name="apellido" placeholder="apellido" /><br /><br />
                    <input onChange={(e) => this.emailChange(e)} type="text" name="email" placeholder="email" /><br /><br />
                    <input onChange={(e) => this.passwordChange(e)} type="text" name="password" placeholder="password" /><br /><br />
                    <input onChange={(e) => this.telefonoChange(e)} type="text" name="telefono" placeholder="telefono" /><br /><br />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;