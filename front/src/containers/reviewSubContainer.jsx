import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReviews } from '../redux/action-creators/review-action';
import { fetchUsers } from '../redux/action-creators/users';

function mapStateToProps(state, ownProps) {
    return {
        review: ownProps.review,
        rev: state.review,
        user: state.user,
        producto: ownProps.producto,
        users: state.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addReview: function (value, user, product, estrellas) {
            dispatch(addReview(value, user, product, estrellas))
        },
        fetchUsers: () => {
            dispatch(fetchUsers())
        },
        fetchReviews: (producto) => {
            dispatch(fetchReviews(producto))
        }
    };
}

class reviewSubContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            addReview: [],
            reviews: [],
            currentProduct: 0,
            rating: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onStarClick = this.onStarClick.bind(this)
    }
    componentDidMount() {
        this.props.fetchReviews(2)
        this.props.fetchUsers()
        setTimeout(fetchReviews(this.props.producto), 10)
    }
    handleChange(evt) {
        this.setState({
            value: evt.target.value,
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addReview(this.state.value, this.props.user, this.props.producto, this.state.rating)
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    fechReviews(reviews) {

    }
    render() {
        return (
            <div>
                HOLA
            </div>
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(reviewSubContainer);