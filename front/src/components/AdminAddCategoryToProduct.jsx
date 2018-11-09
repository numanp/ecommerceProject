import React from 'react';
import { Link } from 'react-router-dom';



export default ({listaCategorias, categoriasProducto, handleClick, producto, handleAgregarCategorias}) => (
    <div  className="container-fluid" id="AgregarCatAPrdoucto" >
		<div  className="container agregarCatInd"   >
           <h1><b> {producto ? producto.nombre : null} </b></h1>
           <h2>Categorias:</h2>
            <ul>
                { producto ? producto.categorias.map(categoria =>
                <li>{categoria.nombre}</li>
                ) : null
            }
            </ul>
            <h1>Editar Categorias producto 1</h1>
            <select className="form-control  botonAgregarCategoria" name="AgregarCat" id="">
                {
                    listaCategorias.map(categoria => 
                        <option value={categoria.id}>{categoria.nombre} </option>
                    )
                }
            </select>
            <br/><br/>
            <button className="btn btn-primary" onClick={() => handleClick()}>Agregar Categorias</button>
            <button className="btn btn-primary " onClick={() => handleAgregarCategorias()}>Confirmar Cambios</button>

	</div>
</div>
);
