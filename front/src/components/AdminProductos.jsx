import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
    <div className="container-fluid" id="adminListaProductos">
        
        <br/>
        <Link to='/admin'>
        <button className='btn btn-primary'>
        <span className="
            glyphicon glyphicon-chevron-left">
                Back
            </span>
        </button>
        </Link>
    <div className="container titleListaProductos">
        <br/>

            <div className="col-md-4">
                <h3> Producto</h3>
            </div>
            <div className="col-md-2">
                <h3> Precio </h3>
            </div>
            <div className="col-md-3">
            <h3> Descripcion</h3>
            </div>
            <div className="col-md-3">
                <h3> Editar</h3>
            </div>
       
    </div>

    <div className='container' >
         
            <div className="listaProductos">
                {       props.listaProductos ?
                            props.listaProductos.map(producto => 
                                <div className="listaProductoIndividual" key={producto.id}>
                                    <div className="col-md-4">
                                        <h1> {producto.nombre }</h1>
                                    </div>
                                    <div className="col-md-2">
                                        <h3> ${producto.precio} </h3>
                                    </div>
                                    <div className="col-md-2">
                                        <p> {producto.descripcion.substring(0,50)} </p>
                                    </div>
                                    <div className="col-md-4">
                                    <Link to={`/admin/EditarProducto/${producto.id}`}>
                                            <button className="btn btn-warning"> <span className="glyphicon glyphicon-pencil"></span> Editar Product</button>
                                        </Link>
                                        <Link to={`/admin/editCategoriasProducto/${producto.id}`}>
                                            <button className="btn btn-warning"> <span className="glyphicon glyphicon-pencil"></span> Editar categorias</button>
                                        </Link>
                                    </div>
                                </div>

                        )    
                      : null
                    }
            </div>
    </div>   
</div> //CIERRO CONTAINER-FLUID
);
