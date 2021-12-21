const fs = require('fs');
const path = require ('path');
const db = require('../database/models');
const sequelize = db.sequelize;

//convertir los datos del JSON a objeto literal
/* const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// convertir category.JSON a objeto literal
const categoryFilePath = path.join(__dirname, '../data/category.json');
const categorys = JSON.parse(fs.readFileSync(categoryFilePath, 'utf-8'));

// convertir capacity.JSON a objeto literal
const capacityFilePath = path.join(__dirname, '../data/capacity.json');
const capacitys = JSON.parse(fs.readFileSync(capacityFilePath, 'utf-8'));  */

const productsControllers={

    index: (req, res) => {  
       db.Product.findAll({where: 
            {deleted:0},
            include:['categoria', 'tamaños'],            
        })

        .then(products => {
            /* res.send(products); */
            res.render('./products/products', {products})
        })
        
        /* let idCategory=req.params.cod_category;
        res.render('./products/products', {products, idCategory, capacitys, categorys} ); */
    },

    category: (req, res) => {
        let idCategory=req.params.cod_category;
        let productsCategory = products.filter(producto => producto.category == idCategory);
        res.render ('./products/productsCategory', {productsCategory, idCategory, capacitys, categorys});
    },

    detail: (req, res) => {
        let id = req.params.id;
        db.Product.findByPk(id, 
            {
                include:['categoria', 'tamaños']
        })
        .then (product => {
            /* res.send (product) */
           res.render ('./products/productDetail', {product})
        })
        .catch(error => {
            console.log(error)
        } )


        /* const cod_product = req.params.cod_product;
        const productDetail = products.find(producto => producto.cod_product == cod_product);
        const productCapacity = capacitys.find(capacity => capacity.cod_capacity== productDetail.capacity);
        //Filtro de los otros productos ofertados diferentes al que se muestra en el detalle
        const productOther = products.filter(producto => producto.cod_product != cod_product);
        res.render('./products/productDetail', {productDetail, productCapacity,  productOther});
         */
    },

    /*---------INICIO CRUD DB ----------*/

    create: function (req, res) {
        let promCategory = db.Category.findAll();
        let promSize =db.Size.findAll();
        Promise.all([promCategory, promSize])
        .then (([category, size]) => {
            return res.render('./products/productCreate', {category, size});
        })
        .catch((error) => res.send(error));
    },

    store: function (req, res) {
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: req.file ? req.file.filename : "planta.jpg",
            category_id: req.body.category,
            deleted: 0,
            date_sale: '2022-02-14'
        })

        .then (() => {res.redirect('/products')})
        
    },

    edit: (req, res) =>{
        let promCategory = db.Category.findAll();
        let promSize =db.Size.findAll();
        let promProduct = db.Product.findByPk(req.params.id, 
            {
                include:['categoria', 'tamaños']
            });
        Promise.all([promCategory, promSize, promProduct])
        .then(([categorys, size, product]) => {
            res.render('./products/productEdit.ejs', {categorys, size, product})
            /* res.send({categorys, size, product}) */
        })
    },

    update: (req, res) => {
      db.Product.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: req.file ? req.file.filename : db.Product.image,
            category_id: req.body.category,
            size_id: req.body.size
        },{
            where: {
                id : req.params.id
            }
        })

        .then(() => {
            /* res.send({product}) */
            res.redirect('/products')
        })
        .catch(function(error){
            console.log(error);
        })
    },

    delete: (req, res) => {
        let id = req.params.id
        db.Product.findByPk(id)
        .then (() =>{
            db.Product.update(
                {
                    deleted:1,
                },
                {
                    where:{
                        id: id,
                    },
                }
            )
        })
        .then(() => {
            res.redirect('/products');
        })
        },

        /*---------FIN CRUD DB 17-12-2021-----------*/
        

/*     create: (req, res) => {
        res.render('./products/productCreate');
        
    },

    store: (req, res) =>{

        let newProduct = {
            cod_product: products[products.length - 1].cod_product + 1,
            name: req.body.name,
            category: req.body.category,
            capacity: req.body.capacity ? req.body.capacity : 1 ,
            price: req.body.price,
            discount: req.body.discount ? req.body.discount : 0,
            description: req.body.description,
            image: req.file ? req.file.filename : "planta.jpg" 
        }
        products.push(newProduct);
        let productJson =JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, productJson);

        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.redirect('/products/');
    },

    edit: (req, res) => {
        const cod_product = req.params.cod_product;
        const productEdit = products.find(producto => producto.cod_product == cod_product);
        res.render('./products/productEdit', {productEdit, categorys, capacitys});
    },

    update: (req, res) => {
        //se lee el código del producto que llega por url
        let id=req.params.cod_product;

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
            discount: req.body.discount ? req.body.discount : 0,
            description: req.body.description,
            image: req.file ? req.file.filename : productUpdate.image
        }

        if(req.file) {
            console.log('viene foto nueva');
            if(productUpdate.image != 'planta.jpg') {
                fs.unlinkSync(path.join(__dirname, '../../public/img/products/'+productUpdate.image))
            }
        }

        products[indexProduct] = editedProduct;
        let productJson =JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, productJson);

        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.redirect('/products');
    },

    destroy: (req, res) => {
        let cod_product = req.params.cod_product;
		let finalProducts = products.filter(products => products.cod_product != cod_product);

        let imageOld = products.filter(product => product.cod_product == cod_product)

        if(imageOld[0].image != 'planta.jpg') {
            fs.unlinkSync(path.join(__dirname, '../../public/img/products/'+imageOld[0].image))
        }

		let productJson =JSON.stringify(finalProducts, null, " ");
		fs.writeFileSync(productsFilePath, productJson);


        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		res.redirect('/products');

    }
 */


}

module.exports=productsControllers;