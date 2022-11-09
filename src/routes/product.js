const { Router } = require('express');

const productController = require('../controllers/productController')

const productRoute = new Router();

productRoute.get('/', productController.products);

productRoute.get('/detail', productController.detail)

productRoute.get('/cart', productController.cart );


module.exports = productRoute;