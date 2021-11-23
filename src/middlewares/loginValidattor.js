const {body} = require ('express-validator');

const loginValidations = [
	body('userbox').notEmpty().withMessage('Tienes que escribir el email de usuario'),
	body('userbox').isEmail().withMessage('Escribe un email válido'),
	body('password_box').notEmpty().withMessage('Tienes que escribir una contraseña'),

]
module.exports = loginValidations;