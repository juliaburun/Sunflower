const {body} = require ('express-validator');
const path = require ('path');

const validationCreate = [
    body('name')
        .notEmpty().withMessage('Tenes que escribir el nombre del producto').bail()
		.isLength({min: 5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    body('category')
		.notEmpty().withMessage('Tenes que elegir la categoría'),
    body('price')
		.notEmpty().withMessage('Tenes que escribir el precio'),
    body('discount')
		.notEmpty().withMessage('Tenes que escribir el descuento'),
    body('sizeProduct')
        .notEmpty().withMessage('Tenes que escoger la/las maceta(s)'),
    body('description')
        .notEmpty().withMessage('Tenes que escribir una descripción')
        .isLength({min: 20}).withMessage('La descripción debe tener al menos 20 caracteres'),      
    
    body('image1').custom((value, { req }) => {
        let file = req.file;

        if (file){
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            let fileExtension = path.extname(file.originalname);
            
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })  
]

module.exports = validationCreate;



    
     
    


