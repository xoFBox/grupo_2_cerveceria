const { Router } = require('express');

const productController = require('../controllers/productController')

const productRoute = new Router();

productRoute.get('/', productController.products);

productRoute.get('/detail', productController.detail)

productRoute.get('/cart', productController.cart );

productRoute.get('/create', productController.create );

productRoute.get('/update', productController.update );


module.exports = productRoute;