const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;

module.exports = router;

router.get('/', (req, res) => {
  models.Producto.findAll().then(productos => {
    res.status(200).send(productos);
  });
});

router.get('/:id', (req, res) => {
  models.Producto.findById(req.params.id).then(producto => {
    if (producto != null) res.status(200).send(producto);
    else {
      res.status(200).send('no existe el producto');
    }
  });
});

router.get('/cat/:categoria', (req, res) => {
  models.Categoria.findOne({ where: { nombre: req.params.categoria } })
    .then(cat => {
      var categ = cat.id;
      models.Producto.findAll({
        include: [
          {
            model: models.Categoria,
            attributes: ['nombre'],
            through: { where: { categoriaId: categ } },
          },
        ],
      }).then(productos => {
        res.status(200).send(productos);
      });
    })
    .catch(() => {
      res.send('algo salio mal');
    });
});

router.post('/', (req, res) => {
  models.Producto.create({
    nombre: req.body.nombreProducto.value,
    descripcion: req.body.descripcionProducto.value,
    precio: req.body.precioProducto.value,
    foto: req.body.imgProducto.value,
    stock: req.body.stockProducto.value,
  }).then(producto => {
    console.log('producto creado');
    res.status(200).send(producto);
  });
});

router.put('/addCategory/', (req, res) => {
  models.Producto.findOne({ where: { nombre: req.body.nombreProducto } })
    .then(producto => {
      producto.setCategorias(req.body.categorias);
    })
    .then(() => {
      res.status(200).send('categorias agregadas correctamente');
    });
});
