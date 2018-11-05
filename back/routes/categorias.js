const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

module.exports = router;

router.post('/', (req, res) => {
  models.Categoria.create({
    nombre: req.body.nombre,
  }).then(() => {
    res.status(200).send('categoria creada exitosamente');
  });
});

router.put('/:nombre', (req, res) => {
  models.Categoria.findOne({ where: { nombre: req.params.nombre } })
    .then(categoria => {
      categoria.update(req.body, { fields: ['nombre'] });
    })
    .then(() => {
      res.status(200).send('categoria modificada exitosamente');
    });
});

router.delete('/:id', (req, res) => {
  models.Categoria.destroy({ where: { id: req.params.id } }).then(data => {
    res.send(data);
  });
});
