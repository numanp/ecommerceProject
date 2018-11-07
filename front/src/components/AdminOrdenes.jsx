import React from 'react';
import {Link} from 'react-router-dom'


var arregloCompras = [
    {
        idVenta: 1,
        productos: [10,20,30],
        fechaVenta: '10:25PM',
        status: 'Completado',
        linkProducto: '#'
    },{
        idVenta: 3,
        productos: [10,20,30],
        fechaVenta: '10:25PM',
        status: 'incompleto',
        linkProducto: '#'
    },
    ,{
        idVenta: 4,
        productos: [10,20,30],
        fechaVenta: '10:25PM',
        status: 'incompleto',
        linkProducto: '#'
    },
]


export default () => (


<div  className="container-fluid" id="adminOrdenes">
    <div className="container">
        <h1>Manejo de ordenes</h1>
        
        {
            //DROPDOWN PARA FILTRAR LAS CATEGORIAS
        }
        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filtrar por Status <span class="caret"></span>
            </button>
                <ul class="dropdown-menu">
                    <li><a href="#">CREADO</a></li>
                    <li><a href="#">PROCESADO</a></li>
                    <li><a href="#">CANCELADO</a></li>
                    <li><a href="#">COMPLETADO</a></li>
            </ul>
        </div>


        { //MAPEO POR EL ARREGLO DE COMPRAS
            arregloCompras.map(compra => (
                <div className="profile_compra"  key={compra.idVenta}>
                    <div className="col-md-2">
                        <p>INFO DE LA VENTA.</p>
                    </div>
                    <div className="col-md-2">
                        <p>ID VENTA: {compra.idVenta}</p>
                    </div>
                    <div className="col-md-2">
                        <p>Fecha: {compra.fechaVenta}</p>
                    </div>
                    
                    <div className="col-md-2">
                        <p>Status: {compra.status}</p>    
                    </div>
                    <div className="col-md-2">
                        <Link to="#"><p class="profile_celeste">Ver Detalle</p></Link>
                    </div>
                    
                    <div className="col-md-2">
                        <button class="btn btn-primary">Cambiar el Status</button>
                    
                    </div>
                    
                </div>
            ))
        }
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/>
    </div>
</div>
);
