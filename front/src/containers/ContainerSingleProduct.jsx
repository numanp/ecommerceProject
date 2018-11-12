import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSingleProduct } from '../redux/action-creators/products';
import { addToCart } from '../redux/action-creators/cart';


import Reviews from '../components/Reviews';
import Descripcion from '../components/Descripcion';
import ContainerReview from './ContainerReview';


function mapStateToProps(state, ownProps) {
    return {
        product: state.products.product,
        cart: state.cart,
        idproduct: ownProps.match.params.productId,
        review: state.review
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getSingleProduct: (idProducto) => {
            dispatch(getSingleProduct(idProducto))
        },
        addToCart: (producto) => {
            dispatch(addToCart(producto))
        },
    };
}

class ContainerSingleProduct extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSingleProduct(this.props.idproduct)
    }

    render() {
        return (
            <div>
                <div className="container-productos">
                    <div className="card-SingleProduct">
                        <div className="container-fliud">
                            <div className="wrapper-ContainerSingleProduct row">
                                <div className="preview col-md-6">
                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane img-resp active" id="pic-1">
                                            <img src={this.props.product.foto} />
                                        </div>
                                        <div className="tab-pane img-resp" id="pic-2">
                                            <img src={this.props.product.imagenSingle1} />
                                        </div>
                                        <div className="tab-pane img-resp" id="pic-3">
                                            <img src={this.props.product.imagenSingle2}  />
                                        </div>
                                        <div className="tab-pane img-resp" id="pic-4">
                                            <img src={this.props.product.imagenSingle3}  />
                                        </div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={this.props.product.foto} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img src={this.props.product.imagenSingle1} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img src={this.props.product.imagenSingle2} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img src={this.props.product.imagenSingle3} /></a></li>
                                    </ul>
                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">{this.props.product.nombre}</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <div className="container-description">
                                        <p className="product-description">{this.props.product.descripcion}</p>
                                    </div>
                                    <h4>
                                        <span className="margin-price-text"> Stock Disponible : </span>
                                        <span>{this.props.product.stock}</span>
                                    </h4>
                                    <h4 className="price-singleProduct">
                                        <span className="margin-price-text"> Precio Actual : </span>
                                        <span>{this.props.product.precio}</span>
                                    </h4>
                                    <div className="action">
                                        <button className="add-to-cart btn btn-success" type="button" onClick={(e) => { e.preventDefault(); var obj = this.props.product; obj.q = 1; this.props.addToCart(obj); setTimeout(() => { localStorage.setItem("cart", JSON.stringify(this.props.cart)); }, 10); }}>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContainerReview />
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerSingleProduct)
