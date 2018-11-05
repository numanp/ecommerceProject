import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import { logginSuccess } from '../redux/action-creators/user'


function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logginSucces: (user) => {
            dispatch(logginSuccess(user))
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
        console.log('logn: ',object)
        axios.post('api/login', object)
        .then(console.log(logginSuccess))
        .then(res => logginSuccess(res.data))
        .then(res => console.log('listo'))
        // .then( loginStatus => logginSuccess(loginStatus))
    }
    

    render() {
        return (
            <div>
                <form onSubmit={(e) => { e.preventDefault(); this.logn(this.state) }}>
                    <input onChange={(e) => this.emailChange(e)} type="text" name="email" placeholder="email" /><br /><br />
                    <input onChange={(e) => this.passwordChange(e)} type="text" name="password" placeholder="password" /><br /><br />
                    <button type="submit">Login</button><br /><br />
                </form>
                <button onClick={() => { this.props.logout() }}>Logout</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)






