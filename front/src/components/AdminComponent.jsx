import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container-fluid" id="adminPanel">
    <div className="container">
      <h1>ADMIN PANEL</h1>

      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Crear Producto</h3>
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
              <Link to="/admin/agregarCategoria" className="btn btn-primary">
                Crear Categoria
              </Link>
              <a href="#" className="btn ">
                Editar Categoria
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Editar productos</h3>
              <Link to="/admin/adminListaProductos" className="btn btn-primary">
                Editar Producto
              </Link>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Ver lista ordenes</h3>
              <Link to="/admin/verOrdenes" className="btn btn-primary">
                Ver Ordenes
              </Link>
              <a href="#" className="btn ">
                Editar Producto
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Buscar por orden especifica</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <p>
                <a href="#" className="btn btn-primary">
                  Button
                </a>
                <a href="#" className="btn btn-default">
                  Button
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className="caption">
            <h3>Lista de Usuarios</h3>
            <p>
              <Link to="/admin/users" className="btn btn-warning">
                Manejo de Usuarios
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>{' '}
    {/* CIERRO ROW*/}
  </div>
);
