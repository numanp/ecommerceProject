import React from 'react';

export default function(props) {
  return (
    <div className="reviews">
      <h2>Opiniones sobre el producto</h2>
      <p className="pProducto">{props.reviews.descripcion}</p>
    </div>
  );
}
