import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
<div className='container-fluid' id="AdminAddCategory" >
    <div className='container' >
    <button>  <Link to="/admin/">Volver</Link> </button>

    <h1></h1>
    <h1>Crear Producto</h1>
    <form onSubmit={props.handleSubmit}>
        <div className="form-group">
            <label htmlFor="nombreProducto">Nombre Producto</label>
            <input name="nombreProducto" type="text" className="form-control" placeholder="Nombre Porducto"></input>
        </div>
        <div className="form-group">
            <label htmlFor="precioProducto">Precio</label>
            <input name="precioProducto" type="text" className="form-control" placeholder="Precio"></input>
        </div>
        <div className="form-group">
            <label htmlFor="imgProducto">Image(DEBERIA TENER UNA FUNCION PARA SEPARAR IMAGENES POR , ) APLICAR SPLIT</label>
            <input name="imgProducto" type="text" className="form-control" placeholder="Separar imagenes por ,"></input>
        </div>
        <div className="form-group">
            <label htmlFor="stockProducto">Stock(SI QUEDA TIEMPO AGREGAR BOTON + O - PRODUCTOS AL STOCK</label>
            <input name="stockProducto" type="text" className="form-control" placeholder="Cantidad a agregar"></input>
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
            <textarea name="descripcionProducto" type="textarea" className="form-control" placeholder="descripcion" rows='5'></textarea>
        </div>
        <button type="submit" className="btn  btn-lg btn-primary" >Agregar Producto</button>
    </form>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/>


</div>

</div>
);
