import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <form>
                    <input>Email</input>
                    <input>Password</input>
                </form>

            </div>
        );
    }
}

export default Login;