import React from 'react';

export default function(props) {
  return (
    <div className="reviews cajaopinionproducto">
      <h2>Opiniones sobre el producto</h2>
      {
        props.reviews && props.reviews.map(review =>{
          return(
            <div key={review.id} className="container">
            <div className='row'>
            <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
            <p className='opinionProducto'>- {review.comentario} </p>
            </div>
            </div>
            </div>
          )
        })
      }
    </div>
  );
}
