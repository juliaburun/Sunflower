const express=require('express');
const path=require('path');
const loginControllers=require('../controllers/loginControllers');


const app= express();
const router=express.Router();

/* Ruta login */
router.get('/', loginControllers.login);

/* Ruta register */
router.get('/register', loginControllers.register);



module.exports=router;