import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

function mapStateToProps(state) {
    return {
        /*   user: state.user.logged.logged.id */
    };
}

class userOrdenes extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                holaaaaaaaaaaaaaaaaaaaaaaaaaaaasd
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(userOrdenes);