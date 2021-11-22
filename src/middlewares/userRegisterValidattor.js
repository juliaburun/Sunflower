const {body} = require ('express-validator');

const validationRegister = [

    body('first_name').notEmpty().withMessage('Debe ingresar sus nombres completos'),
    body('last_name').notEmpty().withMessage('Debe ingresar sus apellidos completos'),
    body('email').notEmpty().withMessage('Debes ingresar tu email').bail()
                 .isEmail().withMessage('Debes ingresar un email válido'),
    body('phone').notEmpty().withMessage('Debes ingresar un número de celular').bail()
                .isInt().withMessage('Debes ingresar números enteros'),
    body('password1').notEmpty().withMessage('Debes ingresar una contraseña').bail()
                     .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('password2').custom((value, {req}) => {
        if(value != req.body.password1){
            throw new Error ('las constraseñas no coinciden');
        }
        return true;
    })
]

module.exports = validationRegister;