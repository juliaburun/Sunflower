const express=require('express');
const path=require('path');
const cartControllers=require('../controllers/cartControllers');

var authMiddleware =require ('../middlewares/authMiddleware');


const app= express();
const router=express.Router();

/* Ruta carrito de compra */
router.get('/', authMiddleware, cartControllers.cart);

/* Ruta checkout */
router.get('/checkout', authMiddleware, cartControllers.checkout);



module.exports=router;