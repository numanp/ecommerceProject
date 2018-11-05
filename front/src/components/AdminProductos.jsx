import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
<div className="container-fluid" id="adminListaProductos">
    <h1>DISPLAY ALL PRODUCTOS</h1>
    <div className='container' >
            <div className="listaProductos">
                {       
                    props.listaProductos.map(producto => 
                        <div className="listaProductoIndividual" key={producto.id}>
                            <h1>{producto.nombre }</h1>
                               <Link to={`/admin/EditarProducto/${producto.id}`}>
                                    <button className="btn btn-primary"> Editar Product</button>
                                </Link>
                        </div>
                    )    
                }
            </div>
    </div>   
</div> //CIERRO CONTAINER-FLUID
);
