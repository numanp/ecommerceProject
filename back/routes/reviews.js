const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

module.exports = router;

router.post('/:idProduct', (req, res) => {
    var user = req.body.user
    models.Review.create({
        comentario: req.body.comentario,
        estrellas: req.body.estrellas
    })
        .then((review) => {
            return models.Producto.findById(req.params.idProduct)
                .then((producto) => {
                    return producto.setReviews(review.id)
                })
                .then(() => {
                    return user.setUserReviews(review.id)
                })
                .then(() => {
                    res.send(review)
                })
        })
})