// ************ Require's ************
const express=require('express');
const path=require('path');
const productsControllers=require('../controllers/productsControllers');
const multer = require('multer');

// ************ express() ************
const app= express();

// ************ router() ************
const router=express.Router();

// ************ Multer ************
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb (null, './public/img/products');
    },

    filename: (req, file, cb) =>{
        const newFileImg ='productImg'+Date.now()+path.extname(file.originalname);
        cb(null, newFileImg);
    }
});

const upload = multer ({storage});

// ************ Rutas ************

/* Ruta listado de Productos */
router.get('/', productsControllers.indexProducts);

/* Ruta detalle del Producto */
router.get('/detail/:cod_product', productsControllers.productDetail);

/* Ruta crear el producto */
router.get('/create', productsControllers.productCreate);
router.post('/create', upload.single('image1'),productsControllers.productStore)

/* Ruta modificar el producto */
router.get('/edit', productsControllers.productEdit);


module.exports=router;