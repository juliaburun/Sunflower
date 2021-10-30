const fs = require('fs');
const path = require ('path');

// convertir los datos del JSON a objeto literal
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsControllers={
    indexProducts: (req, res) => {
        res.render('./products/products', {products} );
    },

    productDetail: (req, res) => {
        const cod_product = req.params.cod_product;
        const productDetail = products.find(producto => producto.cod_product == cod_product);
        const productOther = products.filter(producto => producto.cod_product != cod_product);
        res.render('./products/productDetail', {productDetail, productOther});
        //res.send(productOther)
        
    },

    productCreate: (req, res) => {
        res.render('./products/productCreate');
        
    },

    productStore: (req, res) =>{

        let newProduct = {
            cod_product: products[products.length - 1].cod_product + 1,
            name: req.body.name,
            category: req.body.category,
            capacity: req.body.capacity,
            price: req.body.price,
            section: req.body.section,
            description: req.body.description,
            image: req.file.filename
        }
        products.push(newProduct);
        let productJson =JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, productJson);
        res.redirect('/products/');
    },

    productEdit: (req, res) => {
        res.render('./products/productEdit');
        
    }


}

module.exports=productsControllers;