import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

import Reviews from '../components/Reviews';
import Descripcion from '../components/Descripcion';
import ContainerReview from './ContainerReview';

function mapStateToProps(state, ownProps) {
  return {

  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

class ContainerSingleProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('PROPS DEL HIJOOOOOOOOOOOOOOO', this.props)
    return (
      <div>
        <h1>{this.props.product.nombre}</h1>
      </div>
    );
  }
}

export default ContainerSingleProduct