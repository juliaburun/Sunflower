module.exports = (sequelize, dataTypes) => {
    let alias = 'SizeProduct';

    let cols = {
        id: {
            type: dataTypes.INTEGER(20).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER(20).UNSIGNED
        },
        size_id: {
            type: dataTypes.INTEGER(20).UNSIGNED
        },
    };

    let config = {
        tableName: 'sizesproducts',
        timestamps: false
    };
    
    const SizeProduct = sequelize.define(alias, cols, config);

    return SizeProduct;

};
