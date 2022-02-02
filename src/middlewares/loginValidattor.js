const {body} = require ('express-validator');

const loginValidations = [
	body('email').notEmpty().withMessage('Tienes que escribir el email de usuario'),
	body('email').isEmail().withMessage('Escribe un email válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('password').isLength({ min: 8 }).withMessage('Debe contener minimo 8 caracteres')
]
module.exports = loginValidations;