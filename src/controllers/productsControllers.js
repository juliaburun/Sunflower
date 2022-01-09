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
        let id_category = req.params.id;
        let promProduct = db.Product.findAll({
            where: {
                deleted:0,
                category_id: id_category,
            },
            include:['categoria', 'tamaños'],            
        });

        let promCategory= db.Category.findByPk(req.params.id);

        Promise.all([promProduct, promCategory])
        .then(([products,category]) => {

        res.render ('./products/productsCategory', {products,category})
           /* res.send(category); */
        })

        /* let idCategory=req.params.cod_category;
        let productsCategory = products.filter(producto => producto.category == idCategory);
        res.render ('./products/productsCategory', {productsCategory, idCategory, capacitys, categorys}); */
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


    create: function (req, res) {
        let promCategory = db.Category.findAll();
        let promSize =db.Size.findAll();
        Promise.all([promCategory, promSize])
        .then (([category, size]) => {
            return res.render('./products/productCreate', {category, size});
        })
        .catch((error) => res.send(error));
    },

    store: function async (req, res) {
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

        .then (function(newProduct){
           let size_product= req.body.sizeProduct.map(function (idSize){
                return {
					product_id: newProduct.id,	
					size_id: parseInt(idSize),
                }
            });
                
			db.SizeProduct.bulkCreate(size_product)
            .then(() => {
                return  res.redirect('/products') 
            })
            .catch(error => console.log(error));
        /* res.redirect('/products') */
       
        })

        .catch(error => console.log(error));
    },

    edit: (req, res) =>{
        let promCategory = db.Category.findAll();
        let promSize =db.Size.findAll();
        let promProduct = db.Product.findByPk(req.params.id, 
            {
                include:['categoria', 'tamaños']
            });
<<<<<<< HEAD

        Promise.all([promCategory, promSize, promProduct])
        .then(([categorys, size, product]) => {
            res.render('./products/productEdit.ejs', {categorys, size, product})
            console.log (product)
=======
        Promise.all([promCategory, promSize, promProduct])
        .then(([categorys, size, product]) => {
            res.render('./products/productEdit.ejs', {categorys, size, product})
>>>>>>> c6750b9c4324395e439564ea35ea91276429628d
            /* res.send({categorys, size, product}) */
        })
    },

    update: (req, res) => {
<<<<<<< HEAD
        console.log(req.body)
        db.Product.update({
=======
      db.Product.update({
>>>>>>> c6750b9c4324395e439564ea35ea91276429628d
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

    search: async (req, res) =>{
        let search = req.body.busqueda;
       await db.Product.findAll({
            where: {
                deleted:0,
                name:{[db.Sequelize.Op.like]: `%${search}%` },
            },
            include:['categoria', 'tamaños'],            
        })

        .then(products => {
            return res.render('./products/searchProduct', {products})
            /* res.render('./products/products', {products}) */
        })
        .catch(error => {
            console.log(error)
        } )




        
        /* console.log(search); */
    }

}

module.exports=productsControllers;