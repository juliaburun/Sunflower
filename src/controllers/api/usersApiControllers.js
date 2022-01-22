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
        
    }

}

module.exports = usersApiControllers;