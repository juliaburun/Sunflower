const express=require('express');
const path=require('path');
const usersControllers=require('../controllers/usersControllers');

const multer = require('multer');

const { body } = require('express-validator');

const app= express();
const router=express.Router();

const validations = [
	body('userbox').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('password_box').notEmpty().withMessage('Tienes que escribir una contraseña'),

]

/* Ruta login */
router.get('/login', usersControllers.login);

/* ruta proceso validacion*/
router.post('/login', validations, usersControllers.processRegister);


/* Ruta register */
router.get('/register', usersControllers.register);

/* Ruta usuarios */
router.get('/user', usersControllers.usuarios);



module.exports=router;