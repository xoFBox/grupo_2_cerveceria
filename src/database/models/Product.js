module.exports = function(sequelize, dataTypes) {

    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        ibu: {
            type: dataTypes.INTEGER
        },
        alc: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        product_category_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }

    const config ={
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.ProductCategory,{
            as: 'category',
            foreignKey: 'product_category_id'
        })
    }

    return Product;
}