module.exports = (sequelize, dataTypes) => {
  let alias = 'Usuarios';
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
      birthday: {
        allowNull: false,
        type: dataTypes.DATE
      },
      password: {
        allowNull: false,
        type: dataTypes.STRING
      },
      image_profile: {
        type: dataTypes.STRING
      },
      delete: {
        allowNull: false,
        type: dataTypes.STRING(3).UNSIGNED
      },
      
  };
  let config = {
      tableName: 'Users',
      timestamps: false
  }
  const Usuario = sequelize.define(alias, cols, config);
  

  User.associate = function(models) {
    User.belongsTo(models.Rol, {
        as: "roles",
        foreignKey: "rol_id"
    })
}
  return Usuario;
  
}
