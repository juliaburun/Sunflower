const fs = require('fs');
const path = require ('path');

// convertir los datos del JSON a objeto literal
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsControllers={
    index: (req, res) => {       
        res.render('./products/products', {products} );
    },

    detail: (req, res) => {
        const cod_product = req.params.cod_product;
        const productDetail = products.find(producto => producto.cod_product == cod_product);
        const productOther = products.filter(producto => producto.cod_product != cod_product);
        res.render('./products/productDetail', {productDetail, productOther});
        //res.send(productOther)
        
    },

    create: (req, res) => {
        res.render('./products/productCreate');
        
    },

    store: (req, res) =>{

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

    edit: (req, res) => {
        const cod_product = req.params.cod_product;
        const productEdit = products.find(producto => producto.cod_product == cod_product);
        res.render('./products/productEdit', {productEdit});
    },

    update: (req, res) => {
        //se lee el código del producto que llega por url
        id=req.params.cod_product;

        let indexProduct;

        //buscamos el cod_Product, en el json para traernos los datos del producto
        let productUpdate = products.find((producto, index) =>{
            if (producto.cod_product == id){
                indexProduct = index;
                return true;
            }
            return false;
        });

        let editedProduct = {
            cod_product: productUpdate.cod_product,
            name: req.body.name,
            category: req.body.category,
            capacity: req.body.capacity,
            price: req.body.price,
            section: req.body.section,
            description: req.body.description,
            image: req.file ? req.file.filename : productUpdate.image
        }

        products[indexProduct] = editedProduct;
        let productJson =JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, productJson);
        res.redirect('/products');
    },

    destroy: (req, res) => {
        let cod_product = req.params.cod_product;
		let finalProducts = products.filter(products => products.cod_product != cod_product);

		let productJson =JSON.stringify(finalProducts, null, " ");
		fs.writeFileSync(productsFilePath, productJson);
		res.redirect('/products');

    }



}

module.exports=productsControllers;