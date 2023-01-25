module.exports = function(sequelize, dataTypes) {

    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
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
            type: dataTypes.DECIMAL(5,2),
        },
        alc: {
            type: dataTypes.DECIMAL(5,2),
        },
        price: {
            type: dataTypes.DECIMAL(10,2),
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
        });
        Product.belongsToMany(models.Cart, {
            through: "carts_products",
            as: "carts",
            foreingKey: "product_id",
            otherKey: "cart_id"
        })
    }

    return Product;
}