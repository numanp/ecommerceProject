const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

module.exports = router;

router.get('/', (req, res) => {
  models.Venta.findAll().then(ventas => {
    res.status(200).send(ventas);
  });
});

router.get('/:id', (req, res) => {
  models.User.findById(req.params.id).then(usuario => {
    usuario.getCompras().then(compras => {
      res.status(200).send(compras);
    });
  });
});

router.put('/:id', (req, res) => {
  models.Venta.findById(req.params.id).then(venta => {
    venta.update(req.body, { fields: ['status'] });
  });
});

router.post('/', (req, res) => {
  var usuario = {};
  var sale = {};
  models.User.findById(req.body.user)
    .then(us => {
      return models.Venta.create({
        status: req.body.status,
        fecha: req.body.fecha,
        importe: req.body.importe,
        direccion: req.body.direccion,
        email: req.body.email,
        productoXcantidad: req.body.productoXcantidad,
      })
        .then(venta => {
          venta.setProductos(req.body.productos);
          return venta;
        })
        .then(venta => {
          us.setCompras(venta.id);
        });
    })
    .then(a => res.send(a));
});
