const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre').isLength({min:3}).withMessage('Tiene que tener un minimo de 3 caracteres'),
    body('description').isLength({min:20}).withMessage('Tiene que tener un minimo de 20 caracteres'),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpeg', '.png', '.jpg', '.gif'];

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
    body('price').notEmpty().withMessage('Este campo es obligatorio'),
	body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
]