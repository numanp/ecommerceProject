import React, { Component } from 'react'

export default () => {
    return (
        <div>
            <div className="content-webstore">
            <div className="container">
                <div className="webstore-text">
                <h1 className="margin-text" style={{fontSize:"5.9vw"}}><strong>Webstore</strong></h1>
                <h3 className="margin-text" style={{fontSize:"3vw"}}>Compra online!</h3>
                <br></br>
                <a href="/carrito" style={{fontSize: "20px", border: "solid black 1px"}}> INGRESAR </a>
                <ul className="ul-webstore-text ul-none" style={{fontSize:"1vw"}}>
                    <li>Más de 90 millones de compradores</li>
                    <li>en más de 150 países del mundo</li>
                    <li>con 50 medios de pago en Latinoamérica</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
} 