const express=require('express');
const path=require('path');



// ************ Controller Require ************
const usersControllers=require('../controllers/usersControllers');
var users = require ('../middlewares/userRegisterValidattor');
var upload = require ('../middlewares/multerUsers');
// ************ router() ************
const router=express.Router();



// ************ Rutas ************

/* Ruta login */
router.get('/login', usersControllers.login);

/* Ruta register */
router.get('/register', usersControllers.register);
router.post('/register', upload.single('image_profile'), users, usersControllers.ProcessRegister);



module.exports=router;