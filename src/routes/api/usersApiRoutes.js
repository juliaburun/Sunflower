// ************ Require's ************
const express=require('express');
const usersApiControllers=require('../../controllers/api/usersApiControllers');

// ************ router() ************
const router=express.Router();


// ************ Rutas ************
/* Ruta listado de usuarios */
router.get('/', usersApiControllers.list);

/* Ruta user */
router.get('/userEmail/:email', usersApiControllers.detail);



module.exports=router;