const express=require('express');
const path=require('path');
const cartControllers=require('../controllers/cartControllers');


const app= express();
const router=express.Router();

/* Ruta carrito de compra */
router.get('/', cartControllers.cart);

/* Ruta checkout */
router.get('/checkout', cartControllers.checkout);



module.exports=router;