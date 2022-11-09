const { Router } = require('express');

const productController = require('../controllers/productController')

const productRoute = new Router();

productRoute.get('/', productController.detail);

productRoute.get('/cart', productController.cart );

productRoute.get('/create', productController.create );

productRoute.get('/modify', productController.modifiy );


module.exports = productRoute;