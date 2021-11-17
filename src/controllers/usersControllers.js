

const loginControllers={
    login: (req, res) => {
        res.render('./users/login');
        
    },

    register: (req, res) => {
        res.render('./users/register');
        
    },
    usuarios: (req, res) => {
        res.render('./users/user');    
    }

}

module.exports=loginControllers;