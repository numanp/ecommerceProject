import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

import Reviews from '../components/Reviews';
import Descripcion from '../components/Descripcion';
import ContainerReview from './ContainerReview';


class SingleProduct extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <div className="container">
        <div className="product">
          <div className="row">
            <div className="col-md-8">
              <img
                className="imagenProducto"
                src={this.state.product.foto}
              />
            </div>
            <div className="col-md-4">
              <h2 className="hProducto">
                <strong>{this.state.product.nombre}</strong>
              </h2>

              <br />
              <p className="pProducto ">
                <span className="glyphicon glyphicon-star " />
                {/* {this.state.fakeProduct.reviews.opiniones + ' opiniones'} */}
              </p>
              <br />

              <p className="pProducto ">
                <span className="glyphicon glyphicon-credit-card" />
                Paga en hasta
                <span>
                  <strong>12 cuotas</strong>
                </span>
              </p>
              <p className="pProducto" style={{ textAlign: 'left' }}>
                {'$ ' + this.state.product.precio}
              </p>
              <br />
              <button
                type="button"
                className="btn btn-default btn-lg"
                disabled="disabled"
                style={{ marginLeft: '50%' }}
              >
                Add to cart
              </button>

              <img src="https://png.icons8.com/metro/30/000000/shopping-cart.png" />

              <button
                style={{ marginTop: '3%' }}
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Comprar Ahora
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="descripcion">
                <Descripcion descripcion={this.state.product.descripcion} />
              </div>
              <div className="reviews">
                <ContainerReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ContainerSingleProduct)