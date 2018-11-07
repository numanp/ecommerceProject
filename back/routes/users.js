const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

router.get('/me', (req, res) => {
  res.send(req.user || 'no estas logeado');
});

router.delete('/:user', (req, res) => {
  console.log('userBack', req.params.user);
  models.User.destroy({ where: { email: req.params.user } }).then(() => {
    res.status(200).send('OK');
  });
});

router.put('/:id', (req, res) => {
  models.User.findById(req.params.id)
    .then(user => {
      user.update(req.body, { fields: ['nombre', 'apellido', 'telefono'] });
    })
    .then(() => {
      res.status(200).send('usuario modificado exitosamente');
    });
});

router.put('/admin/:user', (req, res) => {
  models.User.findAll({ where: { email: req.params.user } }).then(user =>
    user[0].update({ admin: true }),
  );
});

router.post('/signup', (req, res) => {
  models.User.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password,
    telefono: req.body.telefono,
  }).then(() => {
    console.log('usuario creado');
    res.send('usuario creado correctamente');
  });
});

module.exports = router;
