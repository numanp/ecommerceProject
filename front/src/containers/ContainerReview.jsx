import React, { Component } from 'react'
import Reviews from '../components/Reviews'
import ReviewInput from '../components/ReviewInput'
import store from '../redux/store';

export default class ContainerReview extends Component {
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
        const addReview = evt.target.value
        this.setState({
            value: addReview
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({
          addReview: [...this.state.addReview, this.state.value],
        });
      }

  render() {
    return (
      <div>
        <ReviewInput addreview={this.state.addreview} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Reviews addReview={this.state.addReview} fakeReviews={this.state.fakeReviews}/>
      </div>
    )
  }
}
