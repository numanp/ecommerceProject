import React, { Component } from 'react'
import Reviews from '../components/Reviews'
import ReviewInput from '../components/ReviewInput'
import { connect } from 'react-redux';
import { addReview } from '../redux/action-creators/review-action'
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import { fetchUsers } from '../redux/action-creators/users';
import { fetchReviews } from '../redux/action-creators/review-action';

function mapStateToProps(state, ownProps) {
    return {
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

class ReviewSubContainer extends Component {
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
    componentDidMount() {
        setTimeout(fetchReviews(2), 5)
    }
    render() {
        return (
            <div>
                hola
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewSubContainer)