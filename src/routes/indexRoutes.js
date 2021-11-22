const express=require('express');
const indexControllers=require('../controllers/indexControllers');

const router=express.Router();

/* Ruta Index */
router.get('/', indexControllers.index);

/* Ruta about */
router.get('/about', indexControllers.about);


module.exports=router;
