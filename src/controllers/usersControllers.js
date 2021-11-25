const fs = require('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');


const controller={

    register: (req, res) => {
        res.render('./users/register');
    },

    ProcessRegister: (req, res) =>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDb = User.findByField('email', req.body.email);

        if (userInDb){
            return res.render('./users/register',{
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            })
        }

        let userToCreate = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            password: bcryptjs.hashSync(req.body.password, 10),
            user_type: 2,
            image_profile: req.file ? req.file.filename : "user.jpg"
        }

        let userCreated = User.create(userToCreate);

        res.redirect('/users/login') 
         
    },

    login: (req, res) => {
        res.render('./users/login', { data: null });
    },

    loginProcess: (req, res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
			return res.render('./users/login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

        
 		 let userToLogin = User.findByField('email', req.body.email)
          console.log (userToLogin)

        if(userToLogin){
            let isOkPassword = bcryptjs.compareSync( req.body.password, userToLogin.password)
            if (isOkPassword){
                return res.render('./users/profile', {data: userToLogin}) 
              }

            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                    }
            })
        }
  
        return res.render('./users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        })
        
    }, 
 

    profile: (req, res) => {
        let id= req.params.id
        let userInDb = User.findByField('cod_user', id);
        res.send (id)
/*         return res.render('./users/profile', userInDb);    
 */    },
}

module.exports = controller;