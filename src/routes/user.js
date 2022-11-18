const { Router } = require('express');

const multer = require('multer');

const userController = require('../controllers/userController');

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'public/images/users')
    },
    filename(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({ storage });

const userRoute = new Router();

userRoute.get('/login', userController.login)

userRoute.post('/login', userController.loginPost)

userRoute.get('/register', userController.register)

userRoute.post('/register', upload.single('image'), userController.registerPost)

module.exports = userRoute;
