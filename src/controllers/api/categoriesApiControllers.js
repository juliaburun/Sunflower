const db = require('../../database/models');

const categoriesApiControllers={

    list: (req, res) => {  
       db.Category.findAll()

        .then(categories => {
            res.status(200).json({
                meta:{
                    status:200,
                    total:categories.length,
                    url:"api/categories"
                },
                data: categories
            })
        })
        .catch(error => console.log(error))
        
    }

}

module.exports = categoriesApiControllers;