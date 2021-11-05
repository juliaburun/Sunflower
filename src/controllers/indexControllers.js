const fs = require('fs');
const path = require ('path');

// convertir products.JSON a objeto literal
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// convertir category.JSON a objeto literal
const categoryFilePath = path.join(__dirname, '../data/category.json');
const category = JSON.parse(fs.readFileSync(categoryFilePath, 'utf-8'));

// convertir capacity.JSON a objeto literal
const capacityFilePath = path.join(__dirname, '../data/capacity.json');
const capacity = JSON.parse(fs.readFileSync(capacityFilePath, 'utf-8'));

// convertir discount.JSON a objeto literal
const discountFilePath = path.join(__dirname, '../data/discount.json');
const discount = JSON.parse(fs.readFileSync(discountFilePath, 'utf-8'));

// convertir section.JSON a objeto literal
const sectionFilePath = path.join(__dirname, '../data/section.json');
const section = JSON.parse(fs.readFileSync(sectionFilePath, 'utf-8'));

const indexControllers={
    index: (req, res) => {
        const productsOferta = products.filter(producto => producto.section == section.cod_section);
        console.log(products);

        res.render('index');
    },

    about: (req, res) => {
        res.render('about');
    }

}

module.exports=indexControllers;