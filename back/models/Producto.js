var db = require('./db');
const Sequelize = require('sequelize');

const Producto = db.define('producto', {
  nombre: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.TEXT,
  },
  precio: {
    type: Sequelize.INTEGER,
  },
  foto: {
    type: Sequelize.TEXT,
  },
  disponibilidad: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  stock: {
    type: Sequelize.INTEGER,
  },
  imagenSingle1: {
    type: Sequelize.TEXT,
  },
  imagenSingle2: {
    type: Sequelize.TEXT,
  },
  imagenSingle3: {
    type: Sequelize.TEXT,
  },
});

module.exports = Producto;
