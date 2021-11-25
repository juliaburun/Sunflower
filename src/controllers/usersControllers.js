const fs = require('fs');
const path = require ('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');

// convertir los datos del JSON a objeto literal
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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


        //SE COMENTO LO DE JULIA PARA QUE FUNCIONE EL REDIRECIONAR Y MOSTRAR USUARIO
        
/* 		 let userToLogin = User.findByField('email', req.body.email)

        if(userToLogin){
            let isOkPassword = bcryptjs.compareSync( req.body.password, userToLogin.password)
            if (isOkPassword){
                return res.redirect('./user')/*.id ESTE.ID VA DENTRO DEL PARENTESIS DESPUES DE USER*/
 /*             }
            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            })
        }
  */
 /*         return res.render('./users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        })
        
    }, 
 */ 
//SE AGREGO SOLO ESTE CODIGO QUE ESTABA ANTES DE JULIA
	return res.render('./users/user', { data:req.body });     
    },

// ESTO ESTABA CON EL CODIGO DE JULIA
    profile: (req, res) => {
        return res.render('./users/user');    
    },
}

module.exports = controller;