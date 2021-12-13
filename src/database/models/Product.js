module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER(20).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        description: {
            allowNull: false,
            type: dataTypes.STRING
        },
        price: {
            allowNull: false,
            type: dataTypes.INTEGER(20).UNSIGNED
        },
        discount: {
            allowNull: false,
            type: dataTypes.INTEGER(10).UNSIGNED
        },
        image: {
            type: dataTypes.STRING
        },
        category_id: {
            type: dataTypes.INTEGER(20).UNSIGNED
        },
        deleted: {
            allowNull: false,
            type: dataTypes.INTEGER(10).UNSIGNED
        },
        date_sale: {
            type: dataTypes.DATEONLY
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, { 
            as: "categoria",
            foreignKey: "category_id"
        })

        Product.belongsToMany(models.Size,{
            as: 'tamaños',
            through: 'sizesproducts',
            foreignKey: 'product_id',
            otherKey: 'size_id',
            timestamps: false
        })

    }
    return Product;
}
 