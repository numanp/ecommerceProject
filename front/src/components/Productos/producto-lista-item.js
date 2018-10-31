import React from 'react'

export default function ProductListItem(props) {
    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
    return <div className='product-list-item' key={props.id}>
        <h3>{ props.name }</h3>
        <img
            height={100}
            title={ props.product.name }
            src={"https://img.europapress.es/fotoweb/fotonoticia_20180228142446_640.jpg"}
            // src={`/productos/${props.product.image}`}
        />
        <div> { props.product.description } </div>
        <div> ${ props.product.price } </div>
        <div>
        
        {
            
            <button onClick={ () => props.addToCart(props.product)}> 
                Add to cart ({
                    (thisItemInCart && thisItemInCart.quantity) || 0
                })
            </button>

        }
        </div>
    </div>
}