module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.INTEGER(20).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        name: {
          allowNull: false,
          type: dataTypes.STRING
        },
        
    };
    let config = {
        tableName: 'Roles',
        timestamps: false
    }
    const Rol = sequelize.define(alias, cols, config);
    
    Rol.associate = function(models) {
      Rol.hasMany(models.User, {
          as: "roles",
          foreignKey: "rol_id"
      }) 
  }
    return Rol;
    
  }