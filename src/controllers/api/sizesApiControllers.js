const db = require('../../database/models');

const sizesApiControllers={

    list: (req, res) => {  
       db.Size.findAll()

        .then(sizes => {
            res.status(200).json({
                meta:{
                    status:200,
                    total:sizes.length,
                    url:"api/sizes"
                },
                data: sizes
            })
        })
        .catch(error => console.log(error))
        
    }

}

module.exports = sizesApiControllers;