import React from 'react';
import { Link } from 'react-router-dom';

var componentesAdmin= [
    /*{
        nombre: 'Agregar/Editar Producto',
        link: '/admin/agregarProducto"',
        button1: 'Agregar Producto',
        button2: 'Editar Producto'
    },
    {
        nombre: 'Crear Categorias',
        link: '/admin/agregarProducto"',
        button1: 'Crear categoria',
        button2: ''
    },
    {
        nombre: 'Manejar disponiblidad producto',
        link: '/admin/agregarProducto"',
        button1: 'Agregar Producto',
        button2: ''
    },
    {
        nombre: 'Ver lista ordenes',
        link: '/admin/agregarProducto"',
        button1: 'Agregar Producto',
        button2: ''
    },
    {
        nombre: 'Buscar por orden especifica',
        link: '/admin/agregarProducto"',
        button1: 'Agregar Producto',
        button2: ''
    },
    {
        nombre: 'Promover Usuario',
        link: '/admin/agregarProducto"',
        button1: 'Agregar Producto',
        button2: ''
    },,
    {
        nombre: 'Eliminar Usuario',
        link: '/admin/agregarProducto"',
        button1: 'Agregar Producto',
        button2: ''
    },
    */
];

export default () => (
<div className="container-fluid" id="adminPanel">
    <div className='container' >
        <h1>ADMIN PANEL</h1>


        {
           /*
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
            */
        }
        <div className="row">
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Agregar/Editar Producto</h3>
                        <Link to="/admin/agregarProducto"  className="btn btn-primary">Agregar producto</Link><a href="#" className="btn ">Editar Producto(TODAVIA NO ESTA LISTO)</a>
                    </div>
                </div>
            </div>
            


            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Crear Categorias</h3>
                        <Link to="admin/agregarCategoria" className="btn btn-primary">Crear Categoria</Link><a href="#" className="btn ">Editar Producto</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Manejar disponiblidad producto</h3>
                        <Link to="admin/agregarCategoria" className="btn btn-primary">Crear Categoria</Link><a href="#" className="btn ">Editar Producto</a>
                    </div>
                </div>
            </div>

               <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Ver lista ordenes</h3>
                        <Link to="admin/verOrdenes" className="btn btn-primary">Ver Ordenes</Link><a href="#" className="btn ">Editar Producto</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                    <div className="caption">
                            <h3>Buscar por orden especifica</h3>
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                            <p><a href="#" className="btn btn-primary">Button</a> <a href="#" className="btn btn-default">Button</a></p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                            <h3>Promover Usuario</h3>
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Promover" />
                        </div>
                            <p><a href="#" className="btn btn-warning">Haceme admin</a></p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                            <h3>Eliminar Usuario</h3>
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Eliminar" />
                        </div>
                            <p><a href="#" className="btn btn-danger">Eliminar Usuario</a></p>
                    </div>
                </div>
            </div>

            

        </div> {/* CIERRO ROW*/}
    </div>   {/* CIERRO Container*/}
</div> //CIERRO CONTAINER-FLUID
);
