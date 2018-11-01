import React, { Component } from 'react';
import Reviews from '../components/Reviews';
import Descripcion from '../components/Descripcion';

export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeProduct: {
        foto:
          'https://http2.mlstatic.com/led-tv-hd-32-lg-32lj520b-D_NQ_NP_701663-MLA28517356912_102018-F.webp',
        nombre: 'Led Tv Hd 32 " Lg',
        precio: 4999,
        descripcion: 'Tamaño de Pantalla Led 32 pulgadas, alta resolución, ',
        reviews: {
          estrellas: '',
          opiniones: 1,
          descripcion:
            '  Buen producto. La calidad es buena. El software(interfaz) también, por lo que estoy bastante conforme. En mi caso, lo compré para usar con mi computadora y puedo decir que la resolución para esta función es bastante mala(hd). Como televisor la verdad muy recomendado. Antes de comprarlo recuerden que, no es smart y no es full hd. Igual, todo eso está aclarado en al descripción. Yo lo compré consciente de sus características. Saludos!.',
        },
      },
    };
  }
  render() {
    return (
      <div className="container">
        <div className="product">
          <div className="row">
            <div className="col-md-8">
              <img
                className="imagenProducto"
                src={this.state.fakeProduct.foto}
              />
            </div>
            <div className="col-md-4">
              <h2 className="hProducto">
                <strong>{this.state.fakeProduct.nombre}</strong>
              </h2>

              <br />
              <p className="pProducto ">
                <span className="glyphicon glyphicon-star " />
                {this.state.fakeProduct.reviews.opiniones + ' opiniones'}
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
                {'$ ' + this.state.fakeProduct.precio}
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
                <Descripcion descripcion={this.state.fakeProduct.descripcion} />
              </div>
              <div className="reviews">
                <Reviews reviews={this.state.fakeProduct.reviews} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
