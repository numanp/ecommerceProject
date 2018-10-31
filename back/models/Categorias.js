const db = require('./db');

const Categorias = db.define('categorias', {
  nombre: {
    type: Sequelize.STRING
  }
});

module.exports = Categorias 