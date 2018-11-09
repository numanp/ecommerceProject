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
                    return producto.setReviews(review.id)
                })
                .then(() => {
                    return models.User.findById(userId)     
                })
                .then((usuario)=>{
                    return usuario.setUserReviews(review.id)
                })
                .then(() => {
                    res.send(review)
                })
        })
})




// router.post('/:id', (req, res) => {
//     console.log("REQ.BODY" ,req.body)
//     console.log("REQ.PARAMS", req.params)
//     var user = req.body.user
//     models.Review.create({
//         comentario: req.body.comentario,
//         // estrellas: req.body.estrellas
//     })
//         .then((review) => {
//             return models.Producto.findById(req.params.idProduct)
//                 .then((producto) => {
//                     return producto.setReviews(review.id)
//                 })
//                 .then(() => {
//                     return user.setUserReviews(review.id)
//                 })
//                 .then(() => {
//                     res.send(review)
//                 })
//         })
// })
