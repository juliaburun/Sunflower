const express=require('express');
const path=require('path');
const usersControllers=require('../controllers/usersControllers');


const app= express();
const router=express.Router();

/* Ruta login */
router.get('/login', usersControllers.login);

/* Ruta register */
router.get('/register', usersControllers.register);

/* Ruta usuarios */
router.get('/user', usersControllers.usuarios);



module.exports=router;