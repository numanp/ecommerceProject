import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
    <div className="container">
        <h2>Agregar Categorias a {props.product.nombre}</h2>
        {props.listaCategorias.map(categoria =>
            <h3>{categoria.nombre}</h3>
        )}
        <div>
            <p>ESTAMOS CON ABU</p>
        </div>

    </div>

);
