//4. Editar la información de un usuario

const fs = require('fs');

const User= {
    fileName: './src/data/users.json',

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    //Genera un cod_user, teniendo en cuenta el último que está en users.json
    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.cod_user + 1;
        }
        return 1;
    },

    //Trae todos los usuarios del json
    findAll: function(){
        return this.getData();
    },

    //Buscar a un usuario por su ID
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.cod_user === id);
        return userFound;
    },

    //Buscar al usuario que se quiere loguear por su email
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] == text);
        return userFound;
    },

    //Guardar el usuario en la DB
    create: function (userData){
        let allUsers = this.findAll();
        let newUser={
            cod_user: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return true;
    },

    //Eliminar a un usuario de la DB
    delete: function(id){
        let allUsers = this.findAll();
        let finalUser = allUsers.filter(oneUser => oneUser.cod_user !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUser, null, ' '));
        return true;
    }
}

module.exports = User;