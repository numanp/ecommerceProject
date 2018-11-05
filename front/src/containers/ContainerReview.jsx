import React, { Component } from 'react'
import Reviews from '../components/Reviews'
import ReviewInput from '../components/ReviewInput'
import { connect } from 'react-redux';
import { addReview } from '../redux/action-creators/review-action'

class ContainerReview extends Component {
    constructor(props){
        super(props);
        this.state = {
                fakeReviews: {
                    estrellas: '',
                    opiniones: 1,
                    descripcion:
                      '  Buen producto. La calidad es buena. El software(interfaz) también, por lo que estoy bastante conforme. En mi caso, lo compré para usar con mi computadora y puedo decir que la resolución para esta función es bastante mala(hd). Como televisor la verdad muy recomendado. Antes de comprarlo recuerden que, no es smart y no es full hd. Igual, todo eso está aclarado en al descripción. Yo lo compré consciente de sus características. Saludos!.',
                  },
                value: '',
                addReview: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            value: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addReview(this.state.value)
      }

  render() {
    return (
      <div>
        <ReviewInput handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Reviews addReview={this.props.numa} fakeReviews={this.state.fakeReviews}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    numa: state.reviews
  }
}

function mapDispatchToProps(dispatch){
  return {
    addReview: function(value){
      dispatch(addReview(value))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ContainerReview)