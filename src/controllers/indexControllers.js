const fs = require('fs');
const path = require ('path');

// convertir los datos del JSON a objeto literal
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// convertir capacity.JSON a objeto literal
const capacityFilePath = path.join(__dirname, '../data/capacity.json');
const capacitys = JSON.parse(fs.readFileSync(capacityFilePath, 'utf-8'));


const indexControllers={
    index: (req, res) => {
        res.render('index', {products, capacitys} );
    },

    about: (req, res) => {
        res.render('about');
    }

}

module.exports=indexControllers;