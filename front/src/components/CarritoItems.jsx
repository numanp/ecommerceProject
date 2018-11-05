import React from 'react'

export default function CarritoItems(props) {
    return      <div className="col-md-2 column productbox">
                    <img
                        className="img-responsive"
                        title={ props.product.name }
                        src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4"
                    />
                    <h3 className="producttitle">{ props.name }</h3>
                    <div> { props.product.description } </div>
                    <div className="productprice"><div>
                    <div className="pricetext">${ props.product.price }</div>
            { 
                    // REEMPLAZARLO POR ELIMIAR
                    // <a href="#" className="glyphicon-props btn btn-success btn-sm" role="button" onClick={() => props.addToCart(props.product)}>
                    //     <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">CART</span>
                    // </a>
            }
                    <a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a>
                    </div></div>
                    <div>
                    </div>
                </div>
}
