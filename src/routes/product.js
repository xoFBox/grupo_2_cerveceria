const { Router } = require('express');
const multer = require('multer');
const path = require('path')


const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename(req, file, cb){
        cb(null, file.originalname)
    }
})

const productRoute = new Router();

const upload = multer({storage});

productRoute.get('/', productController.products);

productRoute.get('/detail', productController.detail)

productRoute.get('/cart', productController.cart );

productRoute.get('/create', productController.create );
productRoute.post('/create', upload.single('image'), productController.storage)

productRoute.get('/update', productController.update );


module.exports = productRoute;