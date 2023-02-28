const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const validationsMiddleware = require('../middlewares/productValidation');
const userAdminValidation = require('../middlewares/userAdminValidation')

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

productRoute.get('/comidas', productController.comidas);

productRoute.get('/detail/:id', productController.detail)

productRoute.get('/cart', productController.cart);
productRoute.post('/cart', productController.cartCreate);


productRoute.get('/create', userAdminValidation, productController.create );
productRoute.post('/create', upload.single('image'), validationsMiddleware , productController.storage)

productRoute.get('/update/:id', userAdminValidation,  productController.edit );
productRoute.put('/update/:id', upload.single('image'), validationsMiddleware , productController.update );

productRoute.delete('/delete/:id', productController.destroy );

module.exports = productRoute;