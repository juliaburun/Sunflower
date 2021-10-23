const express=require('express');
const path=require('path');
const indexControllers=require('../controllers/indexControllers');


const app= express();
const router=express.Router();

/* Ruta Index */
router.get('/', indexControllers.index);

/* Ruta about */
router.get('/about', indexControllers.about);


module.exports=router;
