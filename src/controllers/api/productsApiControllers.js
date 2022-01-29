const db = require('../../database/models');

const productsApiControllers={

    list: (req, res) => {  
       db.Product.findAll({where: 
            {deleted:0},
            include:['categoria', 'tamaños'],            
        })

        .then(products => {
            res.status(200).json({
                meta:{
                    status:200,
                    total:products.length,
                    url:"api/products"
                },
                data: products
            })
        })
        .catch(error => console.log(error))
        
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
        .then( product =>{
            res.status(200).json({
                meta:{
                    status:200,
                    url:"api/products/id"
                },
                data: product
            })
        })
        .catch(error => console.log(error))
    },
    page: (req, res) => {
            const { page, size } = req.query;
            let pages = parseInt(page);
            let sizes = parseInt(size);
            db.Product.findAll({
                limit : sizes,
                offset : pages * sizes,
                include:['categoria', 'tamaños']
            })
            .then( product =>{
                res.status(200).json({
                    meta:{
                        status:200,
                        url:"api/products/page"
                    },
                    data: product
                })
            })
    }

}

module.exports = productsApiControllers;