const { validationResult } = require('express-validator');

const loginControllers={
    login: (req, res) => {
        res.render('./users/login');
        
    },
    processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('./users/login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		return res.render('./users/user');
	},

    register: (req, res) => {
        res.render('./users/register');
        
    },
    usuarios: (req, res) => {
        res.render('./users/user');    
    },


}

module.exports=loginControllers;