import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToLocalStorage } from '../redux/action-creators/cart'
import { Link } from 'react-router-dom'

function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(state) {
    return {}
}


class ProductosSubContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log('render', this.props.products)
        var selectProduct = this.props.selectProduct
        return (
            <div className="container Group-Products-Container-Props">
                <div className="row">
                    {
                        this.props.products && this.props.products.map(product => {
                            console.log(product)
                            return <div key={product.id} className="col-md-2 column productbox">
                                <img
                                    className="img-responsive"
                                    title={product.nombre}
                                    // src="../baseHarcodeada/productos/1-groot.jpg"
                                    src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4"
                                />
                                <h3 className="producttitle">{product.nombre}</h3>
                                <div> {product.descripcion} </div>
                                <div className="productprice"><div>
                                    <div className="pricetext">${product.precio}</div>

                                    <a className="glyphicon-props btn btn-success btn-sm" role="button" /* onClick={() => props.addToCart(props.product)} */>
                                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">CART</span>
                                    </a>

                                    <Link to={`/productos/singleProduct`} className="glyphicon-props btn btn-secondary btn-sm" role="button" onClick={() => selectProduct(product.id)}> Detalles</Link>
                                    <a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a>

                                </div>
                                </div>

                            </div>
                        }
                        )
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductosSubContainer);