const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

module.exports = router;

router.get('/', (req, res) => {
    models.Producto.findAll()
        .then((productos) => {
            res.status(200).send(productos)
        })
})

router.get('/:id', (req, res) => {
    models.Producto.findById(req.params.id)
        .then((producto) => {
            if (producto != null) res.status(200).send(producto)
            else { res.status(200).send('no existe el producto') }
        })
})

router.get('/cat/:categoria', (req, res) => {
    models.Categoria.findById(req.params.categoria)
        .then((cat) => {
            if (cat != null) {
                cat.getProductos()
                    .then((productos) => {
                        res.send(productos)
                    })
            } else {
                res.send('no existe la categoria')
            }
        })
})

router.post('/', (req, res) => {
    models.Producto.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        foto: req.body.foto,
        disponibilidad: req.body.disponibilidad,
        stock: req.body.stock
    }).then(() => {
        console.log('producto creado');
        res.status(200).send('OK')
    });
})

router.put('/addCategory/', (req, res) => {
    models.Producto.findOne({ where: { nombre: req.body.nombreProducto } })
        .then((producto) => {
            producto.setCategorias(req.body.categorias)
        })
        .then(() => {
            res.status(200).send('categorias agregadas correctamente')
        })
})

router.put('/:id', (req, res) => {
    models.Producto.findById(req.params.id)
        .then((producto) => {
            producto.update(req.body, { fields: ['nombre', 'precio', 'descripcion', 'foto', 'disponibilidad', 'stock'] })
        })
        .then(() => {
            res.status(200).send('producto modificado correctamente')
        })
})



