// ************ Require's ************
const express=require('express');

// ************ Controller Require ************
const usersControllers=require('../controllers/usersControllers');

// ************ Middlewares ************
var uploadFile = require ('../middlewares/multerUsers');
var usersValidations = require ('../middlewares/userRegisterValidattor');


// ************ router() ************
const router=express.Router();


// ************ Rutas ************
//Formulario de registro
router.get('/register', usersControllers.register);

//Procesar el registro
router.post('/register', uploadFile.single('image_profile'), usersValidations, usersControllers.ProcessRegister);

//Formulario de login
router.get('/login', usersControllers.login);

/* ruta proceso validacion*/
/* router.post('/login', validations, usersControllers.processRegister);
 */

//perfil de Usuario
router.get('/profile/:userId', usersControllers.profile);

module.exports=router;