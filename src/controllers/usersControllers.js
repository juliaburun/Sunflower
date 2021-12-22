const fs = require('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models')


const controller = {

    register: (req, res) => {
        res.render('./users/register');
    },

    ProcessRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        db.User.findAll(
            {
                where: { email: req.body.email }
            }
        )
            .then((userInDb) => {
                console.log(userInDb)
                if (userInDb.length > 0) {
                    return res.render('./users/register', {
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
                    rol_id: 2,
                    image_profile: req.file ? req.file.filename : "user.jpg",
                    deleted: 0
                }

                db.User.create(
                    userToCreate
                )
                res.redirect('/users/login')

            })
            .catch((error) => res.send(error))
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

        db.User.findOne(
            {
                where: { email: req.body.email }
            }
        )
            .then((userToLogin) => {

                if (userToLogin) {
                    let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
                    if (isOkPassword) {
                        delete userToLogin.password;
                        req.session.userLogged = userToLogin;


                        if (req.body.remember_user) {
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                        }

                        return res.redirect('/users/profile')
                    }

                    return res.render('./users/login', {
                        errors: {
                            email: {
                                msg: 'Las credenciales son inválidas'
                            }
                        }
                    })
                }

                return res.render('/users/login', {
                    errors: {
                        email: {
                            msg: 'No se encuentra este email en nuestra base de datos'
                        }
                    }
                })
            }
        )

            .catch((error) => console.log(error))

    },

    profile: (req, res) => {
        return res.render('./users/profile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/');
    },

    edit: (req,res) => {
       let user = db.User.findOne(
            {
                where: { id: req.params.id }
            }
        )
        .then((user) => res.render('./users/userEdit', { user } ))

    },

    update: async (req,res) => {
        
        let userToEdit = await db.User.findOne(
            {
                where: { id: req.params.id }
            }
        )
        .then((user) => {
            data = JSON.parse(JSON.stringify(user))
            return data
        })

       let userId = req.params.id;
        db.User.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                image_profile: req.file ? req.file.filename : userToEdit.image_profile,
                rol_id: req.body.rol_id
            },
            {
                where: {id: req.params.id}
            })
        .then(()=> {
            return res.redirect('/users/profile')})            
        .catch(error => res.send(error))
    }



}

module.exports = controller;