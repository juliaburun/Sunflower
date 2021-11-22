const express=require('express');
const path=require('path');

const multer = require('multer');

const { body } = require('express-validator');


// ************ Controller Require ************
const usersControllers=require('../controllers/usersControllers');
var users = require ('../middlewares/userRegisterValidattor');
var upload = require ('../middlewares/multerUsers');
// ************ router() ************
const router=express.Router();



// ************ Rutas ************

/* Ruta login */
router.get('/login', usersControllers.login);

/* ruta proceso validacion*/
router.post('/login', validations, usersControllers.processRegister);


/* Ruta register */
router.get('/register', usersControllers.register);
router.post('/register', upload.single('image_profile'), users, usersControllers.ProcessRegister);

/* Ruta usuarios */
router.get('/user', usersControllers.usuarios);



module.exports=router;