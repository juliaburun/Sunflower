const fs = require('fs');
const path = require ('path');
const db = require('../database/models');


// convertir los datos del JSON a objeto literal
/* const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
 */
// convertir capacity.JSON a objeto literal
/* const capacityFilePath = path.join(__dirname, '../data/capacity.json');
const capacitys = JSON.parse(fs.readFileSync(capacityFilePath, 'utf-8')); */


const indexControllers={
    index: (req, res) => {
        /* res.render('index', {products, capacitys} ); */
        db.Product.findAll({where: 
            {deleted:0},
            include:['categoria', 'tamaños'],            
        })

        .then(products => {
            /* res.send(products); */
            res.render('index', {products})
        })
    },

    about: (req, res) => {
        res.render('about');
    },

    errorView: (req, res) => {
        res.render('404')
    }

}

module.exports=indexControllers;