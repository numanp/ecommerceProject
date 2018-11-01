import React from 'react';

export default (props) => (
    
    
    <div className='container' id="AdminAddCategory" >
    
    <h1></h1>
    <h1>Crear Producto</h1>
    <form onSubmit={props.handleSubmit}>
        <div className="form-group">
            <label for="nombreProducto">Nombre Producto</label>
            <input onChange={props.handleInputChange} name="nombreProducto" type="text" className="form-control" placeholder="Nombre Porducto"></input>
        </div>
        <div className="form-group">
            <label for="precioProducto">Precio</label>
            <input onChange={props.handleInputChange} name="precioProducto" type="text" className="form-control" placeholder="Precio"></input>
        </div>
        <div className="form-group">
            <label for="imgProducto">Image(DEBERIA TENER UNA FUNCION PARA SEPARAR IMAGENES POR , ) APLICAR SPLIT</label>
            <input onChange={props.handleInputChange} name="imgProducto" type="text" className="form-control" placeholder="Separar imagenes por ,"></input>
        </div>
        <div className="form-group">
            <label for="stockProducto">Stock(SI QUEDA TIEMPO AGREGAR BOTON + O - PRODUCTOS AL STOCK</label>
            <input onChange={props.handleInputChange} name="stockProducto" type="text" className="form-control" placeholder="Cantidad a agregar"></input>
        </div>
        <div className="form-group">
        <label onChange={props.handleInputChange} name="catProducto" for="catProducto">Categoria (ESTO SE DEBERIA HACER DE OTRO LADO)</label> 
            <select className="form-control">
                <option>Categoria 1</option>
                <option>Categoria 2</option>
                <option>Categoria 3</option>
                <option>Categoria 4</option>
                <option>Categoria 5</option>
            </select>
        </div>

        <div className="form-group">
            <label for="descripcionProducto">Descripcion</label>
            <textarea onChange={props.handleInputChange} name="descripcionProducto" type="textarea" className="form-control" placeholder="descripcion" rows='5'></textarea>
        </div>
        <button type="submit" className="btn  btn-lg btn-primary" >Agregar Producto</button>
    </form>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/>


</div>
);
