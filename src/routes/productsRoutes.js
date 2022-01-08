// ************ Require's ************
const express=require('express');
const path=require('path');
const productsControllers=require('../controllers/productsControllers');
const categoryControllers=require('../controllers/categoryControllers');

const multer = require('multer');



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
router.get('/', productsControllers.index);



/* Ruta detalle del Producto */
router.get('/detail/:id', productsControllers.detail);

/* Ruta crear el producto */
router.get('/create', productsControllers.create);
router.post('/create', upload.single('image1'),productsControllers.store)

/* Ruta modificar el producto */
router.get('/edit/:id', productsControllers.edit);
router.put('/edit/:id', upload.single('imageEdited1'), productsControllers.update); 

/* Ruta eliminar el producto */
router.delete('/delete/:id', productsControllers.delete); 

/* Ruta por categoria productos */
router.get ('/:id', productsControllers.category);

/* Search */
router.post ('/search', productsControllers.search);

module.exports=router;