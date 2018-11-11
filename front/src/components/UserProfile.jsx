import React from 'react';

export default ({userPerfil, arregloCompras, misReviews}) => (
    
    <div className="col-xs-9">
            <h1>Compras</h1>
          
            { //MAPEO POR EL ARREGLO DE COMPRAS
                // arregloCompras.map(compra => (
                //     <div className="profile_compra"  key={compra.idVenta}>
                //         <a href={compra.linkProducto}>
                //             <img src="https://cdn.jysk.es/media/catalog/product/cache/9/thumbnail/960x/163b81649b7ef7bc8a00b0066e59ae0a/u/n/unbenannt-1_947.jpg" alt=""/>
                //         </a>
                //         <p>INFO DEL PRODUCTO.</p>
                //         <p>ID: {compra.idVenta}</p>
                //         <p>Fecha: {compra.fechaVenta}</p>
                //         <p>Status: {compra.status}</p>    
                //         <p className="profile_celeste">Ver Detalle</p>
                //     </div>
                // ))
            }

            <h1>Reviews (PURAMENTE OPCIONAL) NO LO PIDE EN LOS PUNTOS</h1>
            
            { //MAPEO DE LAS ULTIMAS REVIEWS
                // misReviews.map(review => (
                //     <div className="profile_comentario"  key={review.reviewId}>
                //         <a href={review.linkProducto}>
                //             <img src="https://cdn.jysk.es/media/catalog/product/cache/9/thumbnail/960x/163b81649b7ef7bc8a00b0066e59ae0a/u/n/unbenannt-1_947.jpg" alt=""/>
                //         </a>
                //         <p>{review.comentario}</p>
                //         <p>{review.estrellas}/5 ESTRELLAS AGREGAR ESTRELLAS</p>
                //     </div>
                // ))
            }
            
    </div>
);
