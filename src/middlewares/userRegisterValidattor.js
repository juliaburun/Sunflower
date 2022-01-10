const {body} = require ('express-validator');
const path = require ('path');

const validationRegister = [

    body('first_name').notEmpty().withMessage('Debe ingresar sus nombres completos').bail()
                    .isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),
    body('last_name').notEmpty().withMessage('Debe ingresar sus apellidos completos').bail()
                     .isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),
    body('email').notEmpty().withMessage('Debes ingresar tu email').bail()
                 .isEmail().withMessage('Debes ingresar un email válido'),
    body('phone').notEmpty().withMessage('Debes ingresar un número de celular').bail()
                 .isInt().withMessage('Debes ingresar números enteros'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail()
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/).withMessage('Debe tener al menos 8 caracteres, una mayúscula, minúsculas, y caracter especial'),
    body('repassword').custom((value, { req }) => {
        if(value !== req.body.password){
            throw new Error ('las constraseñas no coinciden');
        }
        return true;
    }),
    body('image_profile').custom((value, { req }) => {
        let file = req.file;
        console.log(file)
        if (file){
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            let fileExtensions = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtensions)){
                throw new Error (`Las extensiones de archivos permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = validationRegister;