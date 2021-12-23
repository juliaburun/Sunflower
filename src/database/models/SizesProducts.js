module.exports = (sequelize, dataTypes) => {
    let alias = 'SizeProducts';

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
        tableName: 'sizes',
        timestamps: false
    };
    const Size = sequelize.define(alias, cols, config);

    Size.associate = function (models) {
        Size.belongsToMany(models.Product,{
            as: 'productos',
            through: 'sizesproducts',
            foreignKey: 'size_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }
    return Size;
};
