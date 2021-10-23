const express=require('express');
const path=require('path');
const productsControllers=require('../controllers/productsControllers');


const app= express();
const router=express.Router();

/* Ruta listado de Productos */
router.get('/', productsControllers.indexProducts);

/* Ruta detalle del Producto */
router.get('/detail', productsControllers.productDetail);

/* Ruta crear el producto */
router.get('/Create', productsControllers.productCreate);

/* Ruta modificar el producto */
router.get('/edit', productsControllers.productEdit);


module.exports=router;