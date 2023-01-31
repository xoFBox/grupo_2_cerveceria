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

userRoute.post('/newCategory', userController.newCategory)

userRoute.get('/register', userAuthLogued, userController.register)

userRoute.post('/register', upload.single('image'), validationsMiddleware, userController.registerPost)

userRoute.get('/profile', userUnknow, userController.profile)

userRoute.get('/edit/:id', userUnknow, userController.edit)

userRoute.put('/edit/:id',  userUnknow, upload.single('image'), userController.editPost)

userRoute.get('/logout', userController.logout)

module.exports = userRoute;
