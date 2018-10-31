import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <form action="/login" method="POST">
                    <input type="text" name="email" placeholder="email" />
                    <input type="text" name="password" placeholder="password" />
                </form>
            </div>
        );
    }
}

export default SignUp;