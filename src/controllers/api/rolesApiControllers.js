const db = require('../../database/models');

const rolesApiControllers={

    list: (req, res) => {  
       db.Rol.findAll()

        .then(roles => {
            res.status(200).json({
                meta:{
                    status:200,
                    total:roles.length,
                    url:"api/roles"
                },
                data: roles
            })
        })
        .catch(error => console.log(error))
        
    }

}

module.exports = rolesApiControllers;