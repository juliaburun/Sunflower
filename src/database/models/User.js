module.exports = (sequelize, dataTypes) => {
  let alias = 'User';
  let cols = {
      id: {
          type: dataTypes.INTEGER(20).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
      first_name: {
          allowNull: false,
          type: dataTypes.STRING
      },
      last_name: {
        allowNull: false,
        type: dataTypes.STRING
      },
      email: {
        allowNull: false,
        type: dataTypes.STRING
      },
      phone: {
        allowNull: false,
        type: dataTypes.INTEGER
      },
      password: {
        allowNull: false,
        type: dataTypes.STRING
      },
      image_profile: {
        type: dataTypes.STRING
      },
      rol_id: {
        type: dataTypes.INTEGER
      },
      deleted: {
        allowNull: false,
        type: dataTypes.INTEGER
      },
      
  };
  let config = {
      tableName: 'Users',
      timestamps: false
  }
  const User = sequelize.define(alias, cols, config);
  
  /* A DESCOMENTAR CUANDO ESTÉ MODELO ROLES */
  User.associate = function(models) {
    User.belongsTo(models.Rol, {
        as: "roles",
        foreignKey: "rol_id"
    }) 
}
  return User;
  
}
