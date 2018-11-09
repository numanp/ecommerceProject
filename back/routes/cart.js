const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

module.exports = router;

router.post('/', (req, res) => {
    models.Carrito.create({
        carro: req.body.carrito
    })
        .then((carro) => {

            return models.User.findById(req.body.userId)
                .then((user) => {
                    return user.setCarro(carro.id)
                })
                .then(() => {
                    res.send('CARRO CREADO CORRECTAMENTE')
                })

        })
});

router.get('/:id', (req, res) => {
    models.User.findById(req.params.id)
        .then((user) => {
            return user.getCarro()
                .then((carrito) => {
                    res.send(carrito.dataValues.carro)
                })
        })
})