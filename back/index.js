const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const db = require('./models/db');



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../front/dist'));

/* models.User.sync({ force: false })
    .then(function () {
        return models.Producto.sync({ force: false });
    })
    .then(function () {
        return models.Review.sync({ force: false });
    })
    .then(function () {
        return models.Venta.sync({ force: false });
    })
    .then(function () {
        return models.Categoria.sync({ force: false });
    }).then(function () {
        return models.ProductoCategoria.sync({ force: true });
    }) */
db.sync({ force: true })
    .then(function () {
        app.listen('3000', function () {
            console.log('listening at 3000');
        });
    })
    .catch(console.error);

app.get('/', function (req, res) {
    /*    models.Producto.create({
        nombre: 'Automatico Trasero',
        descripcion: 'idea emocionante',
        foto: 'https://http2.mlstatic.com/ipad-pro-129-64-gb-gris-ipad-pro-D_NQ_NP_967249-MLA26076837669_092017-F.webp',
        disponibilidad: false,
    }).then(
        (producto) => {
            producto.addCategorias([1, 2])
        }
        )
        .catch((error) => console.log(error))
        .then(data => { */
    res.sendFile(path.resolve('../front/index.html'));
    /* }) */
});
