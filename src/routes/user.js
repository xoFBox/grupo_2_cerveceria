const { Router } = require('express');

const multer = require('multer');

const userController = require('../controllers/userController');
const validationsMiddleware = require('../middlewares/userRegisterValidation');

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

const userAuthLogued = require('../middlewares/userAuthLogued');

const userUnknow = require('../middlewares/userUnknow');


userRoute.get('/login',  userAuthLogued, userController.login)

userRoute.post('/login', userController.loginPost)

userRoute.get('/register', userAuthLogued, userController.register)

userRoute.post('/register', upload.single('image'), validationsMiddleware, userController.registerPost)

userRoute.get('/profile', userUnknow, userController.profile)

userRoute.post('/profile', userController.profile)

userRoute.get('/edit', userUnknow, userController.edit)

userRoute.get('/logout', userController.logout)

module.exports = userRoute;
