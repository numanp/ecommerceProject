const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

module.exports = router;

router.post('/:id', (req, res) => {
    var userId = req.body.user.logged.id
    models.Review.create({
        comentario: req.body.comentario,
        estrellas: req.body.estrellas
    })
        .then((review) => {
            return models.Producto.findById(req.params.id)
                .then((producto) => {
                    return review.setProducto(producto.id)
                })
                .then(() => {
                    return models.User.findById(userId)
                })
                .then((usuario) => {
                    return review.setUser(usuario.id)
                })
                .then(() => {
                    res.send(review)
                })
        })
})

router.get('/:idProduct', (req, res) => {
    console.log("LLEGA AL BACK con: ", req.params.idProduct)
    models.Producto.findById(req.params.idProduct)
        .then((productId) => {
            return productId.getReviews()
        }).then((reviews) => {
            res.send(reviews)
        })
})

