const express=require('express');
const path=require('path');
const productsControllers=require('../controllers/productsControllers');


const app= express();
const router=express.Router();

/* Ruta listado de Productos */
router.get('/', productsControllers.indexProducts);

/* Ruta detalle del Producto */
router.get('/productDetail', productsControllers.productDetail);

/* Ruta crear el producto */
router.get('/productCreate', productsControllers.productCreate);

/* Ruta modificar el producto */
router.get('/productEdit', productsControllers.productEdit);


module.exports=router;