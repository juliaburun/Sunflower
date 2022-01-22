// ************ Require's ************
const express=require('express');
const categoriesApiControllers=require('../../controllers/api/categoriesApiControllers');

// ************ router() ************
const router=express.Router();


// ************ Rutas ************
/* Ruta listado de Productos */
router.get('/', categoriesApiControllers.list);


module.exports=router;