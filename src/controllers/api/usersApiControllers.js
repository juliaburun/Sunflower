const db = require('../../database/models');

const usersApiControllers={

    list: (req, res) => {  
       db.User.findAll(
           {
               where:{
                   deleted:0
               },
               include:['roles']
           }
       )

        .then(users => {
            res.status(200).json({
                meta:{
                    status:200,
                    total:users.length,
                    url:"api/users"
                },
                data: users
            })
        })
        .catch(error => console.log(error))
        
    },

    detail: (req, res) => {
        email = req.params.email;
        db.User.findOne(
            {
                where:{
                    deleted:0,
                    email: email
                },
                include:['roles']
            }
        )
    
        .then(userEmail => {
            let arrayUserEmail= JSON.parse(JSON.stringify(userEmail))
            res.status(200).json({
                meta:{
                    status:200,
                    url:"api/userEmail/email"
                },
                data:{
                    nombre: arrayUserEmail.first_name,
                    email: arrayUserEmail.email,
                    image_profile: arrayUserEmail.image_profile
                } 
            })
        })
        .catch(error => console.log(error))
    }

}

module.exports = usersApiControllers;