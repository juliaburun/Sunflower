// ************ Require's ************
const express=require('express');
const sizesApiControllers=require('../../controllers/api/sizesApiControllers');

// ************ router() ************
const router=express.Router();


// ************ Rutas ************
/* Ruta listado de Productos */
router.get('/', sizesApiControllers.list);


module.exports=router;