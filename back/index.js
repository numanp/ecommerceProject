const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const db = require('./models/index').db;
const models = require('./models/index').modelos;

models.User.sync({ force: false })
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
    })
    .then(function () {
        app.listen('3000', function () {
            console.log('listening at 3000');
        });
    })
    .catch(console.error);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../front/dist'));

<<<<<<< HEAD
app.get('/', function(req, res) {
    models.User.create({
        nombre: 'Sir',
        apellido: 'Lancelot',
        email: 'tusho100pre@gmail.com',
        carrito: ['Max Steel', 'transformers', 'locion anal'],
        admin: false,
        password: 'banana30',
        telefono: 0303456,
    })
    .catch((error) => console.log(error))
    .then(data => {
        res.sendFile(path.resolve('../front/index.html'));
=======
app.get('/', function (req, res) {
    models.Venta.create({
        producto: ['JUGUETE'],
        estado: 'procesado',
        fecha: 20 - 10 - 18,
        importe: 2000,
        direccion: 'av tuvieja 3180',
        email: 'tuvieja69@gmail.com',
        userId: 1
>>>>>>> 2c6d5e93fee68063205f3d2220123ae13ea8d957
    })
        .catch((error) => console.log(error))
        .then(data => {
            res.sendFile(path.resolve('../front/index.html'));
        })
});

