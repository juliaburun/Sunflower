const db = require('../database/models');

const categoryControllers={

    index: (req, res) => {  
       db.Category.findAll()
        .then(categories => {
            res.send(categories);
            /* res.render('./products/products', {categories}) */
        })
    
    }
}

module.exports = categoryControllers;