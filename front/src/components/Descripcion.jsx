import React from 'react';

export default function(props) {
  return (
    <div className="descripcion">
      <h2>Descripción del producto</h2>
      <br />
      <p className="pProducto">{props.descripcion}</p>
    </div>
  );
}
