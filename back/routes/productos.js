const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = router;

router.get('/', (req, res) => {
  models.Producto.findAll().then(productos => {
    res.status(200).send(productos);
  });
});

router.get('/busqueda', (req, res) => {
  models.Producto.findAll({
    where: {
      nombre: {
        [Op.like]: '%' + req.query.nombre + '%',
      },
    },
  }).then(productos => res.send(productos));
});

router.get('/:id', (req, res) => {
  models.Producto.findById(req.params.id).then(producto => {
    if (producto != null) res.status(200).send(producto);
    else {
      res.status(200).send('no existe el producto');
    }
  });
});

//PARA TRAER TODAS LAS CATEGORIAS DE CIERTO PRODUCTO
// powered by diego
router.get('/productoxcategoria/:id', (req, res) => {
  models.Producto.findOne({
    where: { id: req.params.id },
    include: [models.Categoria]
  })
    .then(producto => res.send(producto))

});

router.get('/todoDeUnaCategoria/:id', (req, res) => {
  models.Categoria.findById(req.params.id)
    .then((categoria) =>
      categoria.getProductos()
    )
    .then((productos) => res.send(productos))
})

router.post('/catAproducto/:id', (req, res) => {
  var arreglo = req.body;
  models.Producto.findById(req.params.id)
    .then(producto => {
      arreglo.forEach(el => producto.setCategorias(el))
      res.send('TODO SALIO BIEN')
    }
    )
    .catch(e => res.send('SWISS MEDICAL NO FUNCIONA'))
  //res.send(producto))

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
  //TOMA DESDE ADMIN EL FORMULARIO CON EL BUTTON
  models.Producto.create({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    foto: req.body.foto,
    stock: req.body.stock,
    imagenSingle1: req.body.imagenSingle1,
    imagenSingle2: req.body.imagenSingle2,
    imagenSingle3: req.body.imagenSingle3
  }).then(producto => {
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

router.put('/:id/', (req, res) => {
  models.Producto.findOne({ where: { id: req.body.id } })
    .then(producto => producto.updateAttributes(req.body))
    .then(updated => {
      res.status(200).send('producto modificado correctamente');
    });
});

router.delete('/:productId/', (req, res) => {
  models.Producto.destroy({ where: { id: req.params.productId } }).then(
    updated => {
      res.status(200).send('producto eliminado correctamente');
    },
  );
});
