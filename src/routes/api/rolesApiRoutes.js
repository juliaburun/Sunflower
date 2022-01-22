// ************ Require's ************
const express=require('express');
const rolesApiControllers=require('../../controllers/api/rolesApiControllers');

// ************ router() ************
const router=express.Router();


// ************ Rutas ************
/* Ruta listado de Productos */
router.get('/', rolesApiControllers.list);


module.exports=router;