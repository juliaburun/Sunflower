// ************ Require's ************
const express=require('express');
const path=require('path');
const productsControllers=require('../controllers/productsControllers');
const categoryControllers=require('../controllers/categoryControllers');

const multer = require('multer');

/* ********************* Middlewares  ********************** */
var productCreateValidattor = require ('../middlewares/productCreateValidattor');
var uploadFile = require ('../middlewares/multerProducts');


// ************ router() ************
const router=express.Router();


// ************ Rutas ************
/* Ruta listado de Productos */
router.get('/', productsControllers.index);

/* Ruta detalle del Producto */
router.get('/detail/:id', productsControllers.detail);

/* Ruta crear el producto */
router.get('/create', productsControllers.create);
router.post('/create',uploadFile.single('image1'), productCreateValidattor, productsControllers.store)

/* Ruta modificar el producto */
router.get('/edit/:id', productsControllers.edit);
router.put('/edit/:id', uploadFile.single('imageEdited1'), productCreateValidattor, productsControllers.update); 

/* Ruta eliminar el producto */
router.delete('/delete/:id', productsControllers.delete); 

/* Ruta por categoria productos */
router.get ('/:id', productsControllers.category);

/* Search */
router.post ('/search', productsControllers.search);

module.exports=router;