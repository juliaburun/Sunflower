const express=require('express');
const indexControllers=require('../controllers/indexControllers');

const router=express.Router();

/* Ruta Index */
router.get('/', indexControllers.index);

/* Ruta about */
router.get('/about', indexControllers.about);

/* Ruta 404 */

router.get('/404', indexControllers.errorView)




module.exports=router;
