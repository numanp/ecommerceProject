import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addLoginToLocalStorage } from '../redux/action-creators/user'

function mapStateToProps(state) {	
    return {	
        loggedIn: state.loggedIn	
    }	
}

function mapDispatchToProps(dispatch) {
    return {
        login: (user) => {
            dispatch(addLoginToLocalStorage(user))
        }
    }
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
        this.props.logginSuccess(object)	
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => { e.preventDefault(); this.props.login(this.state) }}>
                    <input onChange={(e) => this.emailChange(e)} type="text" name="email" placeholder="email" /><br /><br />
                    <input onChange={(e) => this.passwordChange(e)} type="text" name="password" placeholder="password" /><br /><br />
                    <button type="submit">Login</button><br /><br />
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)





