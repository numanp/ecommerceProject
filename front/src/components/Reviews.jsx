import React from 'react';

export default function(props) {
  return (
    <div className="reviews">
      <h2>Opiniones sobre el producto</h2>
      {
        props.addReview && props.addReview.map(review =>{
          return(
            <div className="container">
            <div className='row'>
            <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
            <p className='opinionProducto' key={review.id}>- {review} </p>
            </div>
            </div>
            </div>
          )
        })
      }
    </div>
  );
}
