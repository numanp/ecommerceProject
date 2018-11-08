const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

router.get('/', (req, res) => {
  models.User.findAll().then(users => res.send(users));
});

router.get('/me', (req, res) => {
  res.send(req.user || 'no estas logeado');
});

router.get('/:userId', (req, res) => {
  models.User.findById(req.params.userId).then(user => res.send(user));
});


router.delete('/:userId', (req, res) => {
  console.log('userBack', req.params.user);
  models.User.destroy({ where: { id: req.params.userId } }).then(() => {
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

router.put('/makeAdmin/:userId', (req, res) => {
  models.User.findById(req.params.userId).then(user =>
    user.update({ admin: true }).then(() => {
      res.status(200).send('usuario modificado ');
    }),
  );
});

router.post('/signup', (req, res) => {
  models.User.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password,
    telefono: req.body.telefono,
  })
    .then(() => {
      console.log('usuario creado');
      res.send('usuario creado correctamente');
    })
    .catch(err => res.status(400).send(err));
});

module.exports = router;
