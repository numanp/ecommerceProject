import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
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

    render() {
        return (
            <div>
                <form onSubmit={(e) => { e.preventDefault(); this.props.logn(this.state) }}>
                    <input onChange={(e) => this.emailChange(e)} type="text" name="email" placeholder="nombre" /><br /><br />
                    <input onChange={(e) => this.passwordChange(e)} type="text" name="password" placeholder="password" /><br /><br />
                    <button type="submit">Login</button><br /><br />
                </form>
                <button onClick={() => { this.props.logout() }}>Logout</button>
            </div>
        );
    }
}

export default Login;