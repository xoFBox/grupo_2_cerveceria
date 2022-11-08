const { Router } = require('express');

const userController = require('../controllers/userController')

const userRoute = new Router();

userRoute.get('/login', userController.login)

userRoute.post('/login', userController.loginPost)

userRoute.get('/register', userController.register)

module.exports = userRoute;
