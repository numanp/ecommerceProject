import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container-fluid" id="adminPanel">
    <div className="container">
      <h1>ADMIN PANEL</h1>
      {/*
            MAPEAR CUANDO TERMINE
           componentesAdmin.map(componente =>
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                         <div className="caption">
                         <h3>{componente.nombre}</h3>
                         { componente.input ? true :}
                         <Link to={componente.link} className="btn btn-primary">{componente.button1}</Link><a href="#" className="btn ">{componente.button2}</a>
                         </div>
                    </div>
                </div>
            )
            */}
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Agregar/Editar Producto</h3>
              <Link to="/admin/agregarProducto" className="btn btn-primary">
                Agregar producto
              </Link>
              <a href="#" className="btn ">
                Editar Producto(TODAVIA NO ESTA LISTO)
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Crear Categorias</h3>
              <Link to="admin/agregarCategoria" className="btn btn-primary">
                Crear Categoria
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
              <h3>Manejar disponiblidad producto</h3>
              <Link to="admin/agregarCategoria" className="btn btn-primary">
                Crear Categoria
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
              <h3>Ver lista ordenes</h3>
              <Link to="admin/verOrdenes" className="btn btn-primary">
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
                </a>{' '}
                <a href="#" className="btn btn-default">
                  Button
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Promover Usuario</h3>
              <p>
                <Link to="/admin/promoveUser" className="btn btn-warning">
                  Haceme admin
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Eliminar Usuario</h3>
              <p>
                <Link to="/admin/deleteUser" className="btn btn-warning">
                  Eliminar usuario
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* CIERRO ROW*/}
    </div>{' '}
    {/* CIERRO Container*/}
  </div> //CIERRO CONTAINER-FLUID
);
