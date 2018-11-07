const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;
const sgMail = require('@sendgrid/mail'); //PARA EL MAIL

module.exports = router;

router.get('/checkoutMail', (req,res) =>{
    sgMail.setApiKey('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');
    
    htmlEnviar = `Gracias por tu compra los productos que has comprado todavia no estan listados`;
    const msg = {
        to: 'diegofernandezfontana@gmail.com',//INSERTAR MAIL AL QUE SE LE VA A ENVIAR
        from: 'diegofernandezfontana@gmail.com',//ESTE ES EL MIO, ESTA LINKEADA CON LA KEY
        subject: 'Tu compra se ha realizado correctamente',
        text: 'Compra realizada correctamente',
        html: `<h1>Felicitaciones tu compra se a realizado con exito</h1>
           <p> ${htmlEnviar} </p>
        `,
    };
    sgMail.send(msg);

    res.redirect('/');
})

router.get('/maildispatch', (req,res) =>{
    sgMail.setApiKey('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');

    htmlEnviar = `o llamanos al 0800- numa (4563)`;
    const msg = {
        to: 'diegofernandezfontana@gmail.com',//INSERTAR MAIL AL QUE SE LE VA A ENVIAR
        from: 'diegofernandezfontana@gmail.com',//ESTE ES EL MIO, ESTA LINKEADA CON LA KEY
        subject: 'Tu orden a sido dispatcheada',
        text: 'Tu orden a sido dispatcheada',
        html: `<h1>Tu orden a sido dispatcheada</h1>
        <h3>Deberas tener la orden en un periodo de 48hs</h3>
           <p> ${htmlEnviar} </p>
        `,
    };
    sgMail.send(msg);

    res.redirect('/');
})

router.get('/mailentregado', (req,res) =>{
    sgMail.setApiKey('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');

    htmlEnviar = `INSERTAR UN MENSAJE DE FELICIATCIONES`;
    const msg = {
        to: 'diegofernandezfontana@gmail.com',//INSERTAR MAIL AL QUE SE LE VA A ENVIAR
        from: 'diegofernandezfontana@gmail.com',//ESTE ES EL MIO, ESTA LINKEADA CON LA KEY
        subject: 'Tu orden ha sido entregada',
        text: 'Felicitaciones, has recibido tu orden',
        html: `<h1>La orden a llegado a tu casa</h1>
        <h3>Esperemos que disfrutes tu producto y no te quejes tanto</h3>
           <p> ${htmlEnviar} </p>
        `,
    };
    sgMail.send(msg);

    res.redirect('/');
})


router.get('/', (req, res) => {
    models.Venta.findAll()
        .then((ventas) => {
            res.status(200).send(ventas)
        })
});

router.get('/:id', (req, res) => {
    models.User.findById(req.params.id)
        .then((usuario) => {
            usuario.getCompras()
                .then((compras) => {
                    res.status(200).send(compras)
                })
        })
});

router.put('/:id', (req, res) => {
    models.Venta.findById(req.params.id)
        .then((venta) => {
            venta.update(req.body, { fields: ['status'] })
        })
});

router.post('/', (req, res) => {
    var usuario = {};
    var sale = {};
    models.User.findById(req.body.user)
        .then((us) => {
            return models.Venta.create({
                status: req.body.status,
                fecha: req.body.fecha,
                importe: req.body.importe,
                direccion: req.body.direccion,
                email: req.body.email,
                productoXcantidad: req.body.productoXcantidad
            }).then((venta) => {
                venta.setProductos(req.body.productos)
                return venta
            }).then((venta) => {
                us.setCompras(venta.id)
            })
        }).then((a) => res.send(a));
});

