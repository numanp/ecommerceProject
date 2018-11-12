var db = require('./db');

const Producto = require('./Producto');
const User = require('./Users');
const Review = require('./Reviews');
const Venta = require('./Ventas');
const Categoria = require('./Categorias');
const Carrito = require('./Carrito');

const modelos = {
    Producto,
    User,
    Review,
    Venta,
    Categoria,
    Carrito
};

/* Carrito.belongsTo(User); */

User.hasOne(Carrito, { as: 'carro' });

User.hasMany(Venta, { as: 'compra' });
Venta.belongsTo(User);

User.hasMany(Producto, { as: 'publicaciones' });

Producto.hasMany(Review, { as: 'Reviews' });
Review.belongsTo(Producto)

User.hasMany(Review, { as: 'userReviews' });
Review.belongsTo(User)

Producto.belongsToMany(Venta, { through: 'ProductoVenta' });
Venta.belongsToMany(Producto, { through: 'ProductoVenta' });

Categoria.belongsToMany(Producto, { through: 'ProductoCategoria' });
Producto.belongsToMany(Categoria, { through: 'ProductoCategoria' });

module.exports = {
    modelos,
};
