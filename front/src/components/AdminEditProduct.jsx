import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
<div className='container-fluid' id="AdminAddCategory" >
    <div className='container' >
    <Link to='/admin'>
        <button className='btn btn-primary'>
        <span className="
            glyphicon glyphicon-chevron-left">
                Back
            </span>
        </button>
        </Link>

    <h1></h1>
    <h1>Editar {props.selectedProd.nombre}</h1>
    <form onSubmit={props.handleSubmit}>
        <div className="form-group">
            <label htmlFor="nombreProducto">Nombre Producto </label>
            <input name="nombreProducto" type="text" className="form-control" placeholder="Nombre Porducto" value={props.selectedProd.nombre}></input>
        </div>
        <div className="form-group">
            <label htmlFor="precioProducto">Precio</label>
            <input name="precioProducto" type="text" className="form-control" placeholder="Precio" value={props.selectedProd.precio}></input>
        </div>
        <div className="form-group">
            <label htmlFor="imgProducto">Image(DEBERIA TENER UNA FUNCION PARA SEPARAR IMAGENES POR , ) APLICAR SPLIT</label>
            <input name="imgProducto" type="text" className="form-control" value={props.selectedProd.foto} placeholder="Separar imagenes por ,"></input>
        </div>
        <div className="form-group">
            <label htmlFor="stockProducto">Stock(SI QUEDA TIEMPO AGREGAR BOTON + O - PRODUCTOS AL STOCK</label>
            <input name="stockProducto" value={props.selectedProd.stock} type="text" className="form-control" placeholder="Cantidad a agregar"></input>
        </div>
        <div className="form-group">
            
            { props.listaCategorias.map(categoria => 
                   <label key={categoria.id}>
                        {categoria.nombre}
                       <input type="checkbox" name={categoria.nombre} /> 
                       
                   </label>

            )}
        </div>

        <div className="form-group">
            <label htmlFor="descripcionProducto">Descripcion</label>
            <textarea name="descripcionProducto" type="textarea" className="form-control" placeholder="descripcion" rows='5' value={props.selectedProd.descripcion}></textarea>
        </div>
        <button type="submit" className="btn  btn-lg btn-warning" >Editar Producto</button>
    </form>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/>


</div>

</div>
);
