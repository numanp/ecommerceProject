import React from 'react';
import { Link } from 'react-router-dom';

//DEBE RECIBIR UN ARREGLO DE OBJETOS DE TODOS LOS PRODUCTOS Y HACE UN DISPLAY DE CADA UNO

export default props => (
  <div className="container-fluid" id="AdminAddCategory">
    <div className="container">
      <button>
        <Link to="/admin/">Volver</Link>
      </button>

      <h1 />
      {console.log(props.selectedProd, 'selectedProd')}
      <h1>Editar {props.selectedProd.nombre}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Producto </label>
          <input
            name="nombre"
            type="text"
            className="form-control"
            placeholder="Nombre Porducto"
            value={props.selectedProd.nombre}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input
            name="precio"
            type="text"
            className="form-control"
            placeholder="Precio"
            value={props.selectedProd.precio}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="foto">
            Imagen
            {/* Image(DEBERIA TENER UNA FUNCION PARA SEPARAR IMAGENES POR , )
            APLICAR SPLIT */}
          </label>
          <input
            name="foto"
            type="text"
            className="form-control"
            value={props.selectedProd.foto}
            placeholder="Separar imagenes por ,"
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="disponibilidad">Disponibilidad</label>
          <br />
          <input
            type="radio"
            value="true"
            name="disponibilidad"
            onChange={props.handleChange}
          />
          Disponible
          <br />
          <input
            type="radio"
            value="false"
            name="disponibilidad"
            onChange={props.handleChange}
          />
          No Disponible
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="stock">
            Stock
            {/* Stock(SI QUEDA TIEMPO AGREGAR BOTON + O - PRODUCTOS AL STOCK */}
          </label>
          <input
            name="stock"
            value={props.selectedProd.stock}
            type="text"
            className="form-control"
            placeholder="Cantidad a agregar"
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          {props.listaCategorias.map(categoria => (
            <label key={categoria.id}>
              {categoria.nombre}
              <input type="checkbox" name={categoria.nombre} />
            </label>
          ))}
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripcion</label>
          <textarea
            name="descripcion"
            type="textarea"
            className="form-control"
            placeholder="descripcion"
            rows="5"
            value={props.selectedProd.descripcion}
            onChange={props.handleChange}
          />
        </div>
        <button
          onClick={props.handleSubmit}
          type="submit"
          className="btn  btn-lg btn-warning"
        >
          Editar Producto
        </button>
        <button
          onClick={event => {
            event.preventDefault();
            props.deleteProduct(props.selectedProd.id);
          }}
          type="submit"
          className="btn  btn-lg btn-danger"
        >
          Eliminar Producto
        </button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
);
