const { Router } = require('express');

const productController = require('../controllers/productController')

const productRoute = new Router();

productRoute.get('/', productController.detail);


module.exports = productRoute;