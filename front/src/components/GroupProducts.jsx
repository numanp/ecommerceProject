import React from 'react';
import { Link } from 'react-router-dom';

//ABAJO DE TODO ESTA EL MAP DEL COMPONENTE, los divs estan solo de prueba para testear

export default (productos) => {
    var count = 0
    return (
        <div className="container">
            <div className="row">
                <h1>Proba tu suerte!</h1>
                <div id="adv_team_4_columns_carousel" className="carousel slide four_shows_one_move team_columns_carousel_wrapper" data-ride="carousel" data-interval="2000" data-pause="hover">

                    <div className="carousel-inner" role="listbox">
                        <div className="item">
                            {
                                /* productos.productos.map((producto) => {
                                    if ((producto.id % 2 == 0) && (count < 4)) {
                                        count += 1
                                        return (
                                            <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image">
                                                <img src={producto.foto} alt="slider 01" />
                                                <div className="team_columns_item_caption">
                                                    <h4 className="h4-group-products"><Link to={`/api/productos/${producto.id}`} className="navbar-brand">LINK</Link></h4>
                                                    <hr />
                                                    <h5>{producto.descripcion}</h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                }) */
                            }
                        </div>

                        <div className="item active">
                            {
                                /* productos.productos.map((producto) => {
                                    if ((producto.id % 2 != 0) && (count < 8)) {
                                        count += 1
                                        return (
                                            <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image">
                                                <img src={producto.foto} alt="slider 01" />
                                                <div className="team_columns_item_caption">
                                                    <h4 className="h4-group-products">{producto.nombre}</h4>
                                                    <hr />
                                                    <h5>{producto.descripcion}</h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                }) */
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



// {productos.map(producto => {
//     return(
//     <div class="col-xs-12 col-sm-6 col-md-3 team_columns_item_image">
//         <img src={producto.foto} alt="slider 01" />
//         <div class="team_columns_item_caption">
//             <h4>{producto.nombre}</h4>
//             <hr />
//             <h5>{producto.descripcion}</h5>
//         </div>
//     </div>
//     )
// })}










{/* <div className="container Group-Products-Container-Props">
    <div className="row">

        {productos.map(producto => (
            <div className="col-md-2 column productbox">
            <img className="img-responsive" src={producto.foto} />
            <div className="producttitle">{producto.titulo}</div>
            <div className="productprice">
                <div><div className="pricetext">{producto.precio}</div>
                <a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a>
                <a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
            </div>
        ))}

    </div>
    <div className="row">
        
        {productos.map(producto => (
            <div className="col-md-2 column productbox">
            <img className="img-responsive" src={producto.foto} />
            <div className="producttitle">{producto.titulo}</div>
            <div className="productprice">
                <div><div className="pricetext">{producto.precio}</div>
                <a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a>
                <a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
            </div>
        ))}

    </div>
</div> */}



{/* // DIV QUE ANDA NO TOCAR!!!
// <div className="container Group-Products-Container-Props">
// <div className="row">
//     <div className="col-md-2 column productbox">
//         <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
//         <div className="producttitle">secador de pelo TurboPower</div>
//         <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
//     </div>
//     <div className="col-md-2 column productbox">
//         <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
//         <div className="producttitle">secador de pelo TurboPower</div>
//         <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
//     </div>
//     <div className="col-md-2 column productbox">
//         <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
//         <div className="producttitle">secador de pelo TurboPower</div>
//         <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
//     </div>
//     <div className="col-md-2 column productbox">
//         <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
//         <div className="producttitle">secador de pelo TurboPower</div>
//         <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
//     </div>
// </div>
// </div> */}
