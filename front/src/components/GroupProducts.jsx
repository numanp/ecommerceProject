import React from 'react';

//ABAJO DE TODO ESTA EL MAP DEL COMPONENTE, los divs estan solo de prueba para testear

export default (productos) =>{
    return(
        <div className="container Group-Products-Container-Props">
            <div className="row">
                <div className="col-md-2 column productbox">
                    <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
                    <div className="producttitle">secador de pelo TurboPower</div>
                    <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
                </div>
                <div className="col-md-2 column productbox">
                    <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
                    <div className="producttitle">secador de pelo TurboPower</div>
                    <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
                </div>
                <div className="col-md-2 column productbox">
                    <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
                    <div className="producttitle">secador de pelo TurboPower</div>
                    <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
                </div>
                <div className="col-md-2 column productbox">
                    <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
                    <div className="producttitle">secador de pelo TurboPower</div>
                    <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 column productbox">
                    <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
                    <div className="producttitle">secador de pelo TurboPower</div>
                    <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
                </div>
                <div className="col-md-2 column productbox">
                    <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
                    <div className="producttitle">secador de pelo TurboPower</div>
                    <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
                </div>
                <div className="col-md-2 column productbox">
                    <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
                    <div className="producttitle">secador de pelo TurboPower</div>
                    <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
                </div>
                <div className="col-md-2 column productbox">
                    <img className="img-responsive" src="https://avatars1.githubusercontent.com/u/2078339?s=400&v=4" />
                    <div className="producttitle">secador de pelo TurboPower</div>
                    <div className="productprice"><div ><div className="pricetext">£8.95</div><a href="#" className="glyphicon-props btn btn-success btn-sm" role="button"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"> (1)</span></a><a href="#" className="glyphicon-props btn btn-danger btn-sm" role="button">BUY</a></div></div>
                </div>
            </div>
        </div>
    )
}


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