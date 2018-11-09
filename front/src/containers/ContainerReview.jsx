import React, { Component } from 'react'
import Reviews from '../components/Reviews'
import ReviewInput from '../components/ReviewInput'
import { connect } from 'react-redux';
import { addReview } from '../redux/action-creators/review-action'

function mapStateToProps(state) {
  return {
    rev: state.review,
    user: state.user,
    producto: state.products.product,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addReview: function (value, user, product) {
      dispatch(addReview(value, user, product))
    }
  }
}

class ContainerReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      addReview: [],
      currentProduct: 0,

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value,
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addReview(this.state.value, this.props.user, this.props.producto)
  }

  fechReviews(reviews) {

  }

  render() {
    return (
      <div>
        <ReviewInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Reviews user={this.props.user} addReview={this.props.rev} product={this.props.producto} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerReview)
