const express = require('express');
const router = express.Router();
var path = require('path');
const db = require('../models/db');
const models = require('../models').modelos;

router.use('/user', require('./users'));
router.use('/categorias', require('./categorias'));
router.use('/productos', require('./productos'));
router.use('/reviews', require('./reviews'));
router.use('/ventas', require('./ventas'));
router.use('/cart', require('./cart'));

module.exports = router;

