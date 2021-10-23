

const productsControllers={
    indexProducts: (req, res) => {
        res.render('./products/products');
    },

    productDetail: (req, res) => {
        res.render('./products/productDetail');
    },

    productCreate: (req, res) => {
        res.render('./products/productCreate');
        
    },

    productEdit: (req, res) => {
        res.render('./products/productEdit');
        
    }


}

module.exports=productsControllers;