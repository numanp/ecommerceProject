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

class ContainerReview extends Component {
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

  // componentDidMount(){
  //   console.log(this.props.producto)

  // }

  /*   componentWillReceiveProps(nextProps) {
      if (nextProps.producto.id == this.state.producto.id) {
        return
      } else {
        this.setState({ producto: nextProps.producto })
        axios.get(`/api/reviews/${nextProps.producto.id}`)
          .then(reviews => this.setState({ reviews: reviews.data }))
      }
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    } */
  componentDidMount() {
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
    // console.log(this.state.rating)
    // console.log(this.state.reviews)
    // console.log(this.props.producto)
    // const { rating } = this.state.rating;
    return (

      <div>
        <ReviewInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} rating={this.state.rating} onStarClick={this.onStarClick} />
        <Reviews users={this.props.users} reviews={this.state.reviews} user={this.props.user} addReview={this.props.rev} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerReview)

// reviews={this.props.reviews}
