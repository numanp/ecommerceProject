var db = require('./db');
const Sequelize = require('sequelize');

const Ventas = db.define('ventas', {
    status: {
        type: Sequelize.ENUM('creado', 'procesado', 'cancelado', 'completado'),
    },
    fecha: {
        type: Sequelize.DATE,
    },
    importe: {
        type: Sequelize.INTEGER,
    },
    direccion: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },
    productoXcantidad: {
        type: Sequelize.JSON, //AGREGAR PRODUCTO Y CANTIDAD DE CADA PRODUCTO
    }
});

module.exports = Ventas;
