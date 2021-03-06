import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner">
          <div className="item active">
            <img
              src="./images/gif1.gif"
              alt="imagen1"
            />
            <div className="carousel-caption">
              <h1 className="margin-text" style={{ fontSize: '5.9vw' }}>
                <strong>Let's Get It Store (ha)</strong>
              </h1>
              <h3 className="margin-text" style={{ fontSize: '3vw' }}>
                let's get it Store (in here!)
              </h3>
              <p className="ingresa-link">
                <Link to="/productos"> Ingresa!
                </Link>
              </p>
              <ul
                className="ul-webstore-text ul-none"
                style={{ fontSize: '1vw' }}
              >
                <li>Más de 90 millones de compradores</li>
                <li>en más de 150 países del mundo</li>
                <li>con 50 medios de pago en Latinoamérica</li>
              </ul>
            </div>
          </div>

          <div className="item">
            <img
              src="./images/gif2.gif"
              alt="imagen2"
            />
            <div className="carousel-caption">
              <h1 className="margin-text" style={{ fontSize: '5.9vw' }}>
                <strong>Let's Get It Store (ha)</strong>
              </h1>
              <h3 className="margin-text" style={{ fontSize: '3vw' }}>
                let's get it Store (in here!)
              </h3>
              <p className="ingresa-link">
                <a href="#">Ingresa!</a>
              </p>
              <ul
                className="ul-webstore-text ul-none"
                style={{ fontSize: '1vw' }}
              >
                <li>Más de 90 millones de compradores</li>
                <li>en más de 150 países del mundo</li>
                <li>con 50 medios de pago en Latinoamérica</li>
              </ul>
            </div>
          </div>

          <div className="item">
            <img
              src="./images/gif3.gif"
              alt="imagen3"
            />
            <div className="carousel-caption">
              <h1 className="margin-text" style={{ fontSize: '5.9vw' }}>
                <strong>Let's Get It Store (ha)</strong>
              </h1>
              <h3 className="margin-text" style={{ fontSize: '3vw' }}>
                let's get it Store (in here!)
              </h3>
              <p className="ingresa-link">
                <a href="#">Ingresa!</a>
              </p>
              <ul
                className="ul-webstore-text ul-none"
                style={{ fontSize: '1vw' }}
              >
                <li>Más de 90 millones de compradores</li>
                <li>en más de 150 países del mundo</li>
                <li>con 50 medios de pago en Latinoamérica</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

{
  /* <div>
<div className="content-webstore">
<div className="container">
    <div className="webstore-text">
    <h1 className="margin-text" style={{fontSize:"5.9vw"}}><strong>Webstore</strong></h1>
    <h3 className="margin-text" style={{fontSize:"3vw"}}>Compra online!</h3>
    <p className='ingresa-link'><a href='#'>Ingresa!</a></p>
    <ul className="ul-webstore-text ul-none" style={{fontSize:"1vw"}}>
        <li>Más de 90 millones de compradores</li>
        <li>en más de 150 países del mundo</li>
        <li>con 50 medios de pago en Latinoamérica</li>
    </ul>
    </div>
</div>
</div>
</div> */
}
