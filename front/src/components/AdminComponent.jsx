import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className="container-fluid" id="adminPanel">
    <div className="container">

      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Crear Producto</h3>
              <p className='adminP'>Agregar productos a la base de datos.</p>
              <Link to="/admin/agregarProducto" className="btn btn-primary">
                Agregar producto
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Crear Categorias</h3>
              <p className='adminP'>Agregar categorias a la base de datos.</p>
              <Link to="/admin/agregarCategoria" className="btn btn-primary">
                Crear Categoria
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Editar productos</h3>
              <p className='adminP'>Editar productos y cambiar sus propiedades.</p>
              <Link to="/admin/adminListaProductos" className="btn btn-primary">
                Editar Producto
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Ver lista ordenes</h3>
              <p className='adminP'>Ver listado de ordenes y ordenes en especifico.</p>
              <Link to="/admin/verOrdenes" className="btn btn-primary">
                Ver Ordenes
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Buscar por orden especifica</h3>
              <div className="form-group">
                <form className="form-inline" onSubmit={props.handleOrderById}>
                  <div className="form-group">
                    <label className="sr-only" >ID Orden</label>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search" name="ID"/>   
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Ver más detalles de Orden por ID</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      

        
      </div>

      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className="caption">
            <h3>Lista de Usuarios</h3>
            <p>
              <Link to="/admin/users" className="btn btn-primary">
                Manejo de Usuarios
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>{' '}
      </div>
)