import React from 'react'
// import data from '../baseHarcodeada/products.json'



export default function ProductListItem(props) {

    // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
    return <div className="col-md-2 column productbox">
        <img
            className="img-responsive"
            title={ props.product.name }
            src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4"
        />
        <h3 className="producttitle">{ props.name }</h3>
        <div> { props.product.description } </div>
        <div className="productprice"><div>
        <div className="pricetext">${ props.product.price }</div>

        <a className="glyphicon-props btn btn-success btn-sm" role="button" onClick={() => props.addToCart(props.product)}>
            <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">CART</span>
        </a>

        <a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a>

        </div></div>

        <div>

        {
            
            // <button onClick={ () => props.addToCart(props.product)}> 
            //     Add to cart ({
            //         (thisItemInCart && thisItemInCart.quantity) || 0
            //     })
            // </button>

        }
        </div>
    </div>
}


// export default function ProductListItem (props) {
//     return (
//             <div className="col-md-2 column productbox">
//                 <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
//                 <div className="producttitle">secador de pelo TurboPower</div>
//                 <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
//             </div>
//     )
// }