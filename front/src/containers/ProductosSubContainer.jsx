import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToLocalStorage } from '../redux/action-creators/cart';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    products: state.products.products,
  };
}
function mapDispatchToProps(state) {
  return {};
}

class ProductosSubContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var selectProduct = this.props.selectProduct;
    return (
      <div className="container productbox">
        <div className="row-productos">
          {this.props.products &&
            this.props.products.map(product => {
              return (
                <div key={product.id} className="col-md-3 col-sm-6">
                  <span className="thumbnail">
                    <img className="img-size" src={product.foto} alt="..." />
                    <h4 className="h4-productos">{product.nombre}</h4>
                    <div className="ratings">
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star-empty" />
                    </div>
                    <p className="p-productos">{product.descripcion}</p>
                    <hr className="line" />
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <p className="price">$ {product.precio}</p>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <a href="" target="_blank">
                          <button
                            className="glyphicon glyphicon-shopping-cart btn btn-info right"
                            onClick={e => {
                              e.preventDefault();
                              var obj = product;
                              obj.q = 1;
                              this.props.addToCart(obj);
                              setTimeout(() => {
                                localStorage.setItem(
                                  'cart',
                                  JSON.stringify(this.props.cart),
                                );
                              }, 10);
                            }}
                          >
                            {' '}
                          </button>
                        </a>
                        <Link
                          to={`/productos/singleProduct`}
                          className="glyphicon glyphicon-zoom-in btn btn-info right"
                          role="button"
                          onClick={() => selectProduct(product.id)}
                        />
                      </div>
                    </div>
                  </span>
                </div>
              );
            })}
        </div>
        ); })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductosSubContainer);
