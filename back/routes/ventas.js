const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;
const sgMail = require('@sendgrid/mail'); //PARA EL MAIL


module.exports = router;

router.post('/email', (req, res) => {
  console.log("MAIL ENVIANDO?")
  //NO TOCAR LA KEY ESTA HARCODEADISIMA
  sgMail.setApiKey('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');
  /* var productosComprados = req.body.productos
  var htmlEnviar = '<p> Has comprado los siguientes productos ';
  for (var i = 0; i < productosComprados.length; i++) {
    htmlEnviar += productosComprados[i].producto + ", ";
  }
  htmlEnviar += '</p>' */
  const msg = {
    to: req.body.email,
    from: 'f_lp_s@hotmail.com',
    subject: 'Tu compra se ha realizado correctamente',
    text: 'Compra realizada correctamente',
    html: `<h1>Felicitaciones tu compra se a realizado con exito</h1>
          
    `,
  };
  sgMail.send(msg);
  res.send('mail enviado');

})


router.get('/', (req, res) => {
  models.Venta.findAll().then(ventas => {
    res.status(200).send(ventas);
  });
});

router.get('/:id', (req, res) => {
  console.log('IDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', req.params.id)
  models.User.findById(req.params.id).then(usuario => {
    usuario.getCompras().then(compras => {
      res.status(200).send(compras);
    });
  });
});

router.put('/:id', (req, res) => {
  models.Venta.findById(req.params.id).then(venta => {
    venta.update(req.body, { fields: ['status'] });
  })
});

router.post('/', (req, res) => {
  models.User.findById(req.body.user)
    .then(us => {
      return models.Venta.create({
        status: req.body.status,
        fecha: req.body.fecha,
        importe: req.body.importe,
        direccion: req.body.direccion,
        email: req.body.email,
        carro: req.body.carro,
      })
    })
    .then((venta) => {
      return models.User.findById(req.body.userId)
        .then((user) => {
          return venta.setUser(user.id)
        })
        .then(() => {
          res.send('COMPRA CORRECTAMENTE')
        })

    })
});

router.get('/', (req, res) => {
  var usuario = {};
  var sale = {};
  models.User.findById(1)
    .then(us => {
      return models.Venta.create({
        status: 'completado',
        fecha: '02/11/2018',
        importe: 500,
        direccion: 'Azcuenaga 956',
        email: 'diego@gmail.com',
        productoXcantidad: [
          {
            producto: 'Pantalon',
            cantidad: 1,
          },
          {
            producto: 'Remera',
            cantidad: 4,
          },
        ],
      })
        .then(venta => {
          venta.setProductos(req.body.productos);
          return venta;
        })
        .then(venta => {
          us.setCompras(venta.id);
        });
    })
    .then(a => res.send(a));
});
