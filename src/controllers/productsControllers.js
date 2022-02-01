const fs = require('fs');
const path = require ('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');


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
        db.Product.findOne( 
            {
                where:
                {
                    id:req.params.id,
                    deleted:0
                },
                include:['categoria', 'tamaños']
            }
        )
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

    store: async function (req, res) {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            if (req.file) {
                if (req.file.filename) {
                    if (req.file.filename != 'planta.jpg') {
                        fs.unlinkSync(path.join(__dirname, '../../public/img/products/' + req.file.filename))
                    }
                }
            }
            /* console.log(req.body) */
            return res.render('./products/productCreate', {
                category: await db.Category.findAll()
                .then(category => {
                    data = JSON.parse(JSON.stringify(category));
                    return data;
                }),
                size: await db.Size.findAll()
                .then(size => {
                    data = JSON.parse(JSON.stringify(size));
                    return data;
                }),
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

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

        Promise.all([promCategory, promSize, promProduct])
        .then(([categories, size, product]) => {
            res.render('./products/productEdit.ejs', {categories, size, product})
            /* console.log (product) */
            /* res.send({product, size}) */
        })
    },

    update: async (req, res) => {
       /*  console.log(req.body) */
       const resultValidation = validationResult(req);
        console.log(resultValidation)
       if (resultValidation.errors.length > 0) {
            if (req.file) {
                if (req.file.filename) {
                    if (req.file.filename != 'planta.jpg') {
                        fs.unlinkSync(path.join(__dirname, '../../public/img/products/' + req.file.filename))
                    }
                }
            }
            return res.render('./products/productEdit', {
                product: await db.Product.findByPk(req.params.id, 
                    {
                        include:['categoria', 'tamaños']
                    })
                .then(product => {
                    data = JSON.parse(JSON.stringify(product));
                    return data;
                }),
                categories: await db.Category.findAll()
                .then(category => {
                    data = JSON.parse(JSON.stringify(category));
                    return data;
                }),
                size: await db.Size.findAll()
                .then(size => {
                    data = JSON.parse(JSON.stringify(size));
                    return data;
                }),
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        db.Product.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: req.file ? req.file.filename : db.Product.image,
            category_id: req.body.category,
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