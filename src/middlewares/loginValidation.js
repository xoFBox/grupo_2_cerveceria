const { body } = require('express-validator');

module.exports = [
    body('email').notEmpty().withMessage('Ingrese un mail registrado').bail()
       .isEmail().withMessage('Debes escribir un correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una clave')
]


