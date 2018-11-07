import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Reviews from '../components/Reviews';
import Descripcion from '../components/Descripcion';
import ContainerReview from './ContainerReview';

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

class ContainerSingleProduct extends Component {
    constructor(props) {
        super(props);
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
                                            <img src="https://home.ripley.cl/store/Attachment/WOP/D200/2000353128633/2000353128633_2.jpg" />
                                        </div>
                                        <div className="tab-pane img-resp" id="pic-3">
                                            <img src="https://images.philips.com/is/image/PhilipsConsumer/HP8195_06-IMS-es_AR?wid=494&hei=435&$pnglarge$" />
                                        </div>
                                        <div className="tab-pane img-resp" id="pic-4">
                                            <img src="https://siegen.cl/12-large_default/secador-de-pelo-siegen-sg-3042.jpg" />
                                        </div>
                                        <div className="tab-pane img-resp" id="pic-5">
                                            <img src="https://www.ecobadajoz.es/5924-thickbox_default/secador-de-pelo-2200w-2-niveles-de-potencia-orbegozo-mod-se-2320.jpg" />
                                        </div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={this.props.product.foto} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img src="https://images.philips.com/is/image/PhilipsConsumer/HP8195_06-IMS-es_AR?wid=494&hei=435&$pnglarge$" /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img src="https://siegen.cl/12-large_default/secador-de-pelo-siegen-sg-3042.jpg" /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img src="https://home.ripley.cl/store/Attachment/WOP/D200/2000353128633/2000353128633_2.jpg" /></a></li>
                                        <li><a data-target="#pic-5" data-toggle="tab"><img src="https://www.ecobadajoz.es/5924-thickbox_default/secador-de-pelo-2200w-2-niveles-de-potencia-orbegozo-mod-se-2320.jpg" /></a></li>
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
                                        <button className="add-to-cart btn btn-success" type="button">add to cart</button>
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

export default ContainerSingleProduct
