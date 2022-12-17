const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail()
       .isEmail().withMessage('Debes escribir un correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una clave'),
    body('confirmPassword').notEmpty().withMessage('Por favor repeti tu clave'),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}),
    body('category').notEmpty().withMessage('Tienes que seleccionar una categoria'),
]