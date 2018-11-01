import React from 'react';

export default () => (
<div className="container-fluid" id="adminPanel">
    <div className='container' >
        <h1>ADMIN PANEL</h1>

        <div className="row">
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Agregar/Editar Producto</h3>
                        <a href="#" className="btn btn-primary"><p>Agregar</p></a><a href="#" className="btn ">Editar Producto</a>
                    </div>
                </div>
            </div>
            


            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Crear Categorias</h3>
                        <p><a href="#" className="btn btn-primary">Button</a> <a href="#" className="btn btn-default">Button</a></p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Manejar disponiblidad producto</h3>
                        <p><a href="#" className="btn btn-primary">Button</a> <a href="#" className="btn btn-default">Button</a></p>
                    </div>
                </div>
            </div>

               <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Ver lista ordenes</h3>
                        <p><a href="#" className="btn btn-primary">Button</a> <a href="#" className="btn btn-default">Button</a></p>
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
