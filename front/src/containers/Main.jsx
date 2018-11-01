import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import Login from '../components/Login'
import SignUp from '../components/SignUp';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.sign = this.sign.bind(this);
        this.logn = this.logn.bind(this);
        this.logout = this.logout.bind(this);
    }
    sign(object) {
        axios.post('api/signup', object)
    }
    logn(object) {
        axios.post('api/login', object).then(res => console.log(res.data))
    }
    logout() {
        axios.post('api/logout')
            .then(res => console.log(res.data))
    }
    componentDidMount() {
        // axios.get('/api/me')
        //     .then((user) => { console.log('THIS IS ME ', user) })
        //     .catch(console.log)
    }
    render() {
        return (
            <div>
                <NavBar />
                < Route exact path="/" component={LandingPage} />
                < Route exact path="/signup" render={() => <SignUp sign={this.sign} />} />
                < Route exact path="/login" render={() => <Login logout={this.logout} logn={this.logn} />} />
                <Router />
            </div>
        )
    }
}

export default Main;
