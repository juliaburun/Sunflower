module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';

    let cols = {
        id: {
            type: dataTypes.INTEGER(20).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'categories',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Product, { 
            as: "productos",
            foreignKey: "category_id"
        })

    }

    return Category;
};
