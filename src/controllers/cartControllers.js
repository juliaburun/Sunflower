

const cartControllers={
    cart: (req, res) => {
        res.render('./cart/productCart');
        
    },

    checkout: (req, res) => {
        res.render('./cart/checkout');
        
    },

    

}

module.exports=cartControllers;