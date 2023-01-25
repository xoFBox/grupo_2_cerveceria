const Cart = require("./Cart");

module.exports = function(sequelize, dataTypes){
    const alias = "CartProduct";
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        product_id:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        cart_id:{
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };
    const config = {
        tableName: "carts_products",
        timestamps: false, 
    };

    const CartProduct = sequelize.define(alias,cols, config);

    CartProduct.associate = function(models){
        CartProduct.hasMany(models.Product, {
            as: "product",
            foreingKey: "product_id"
        });
        CartProduct.hasMany(models.Cart, {
            as: "cart",
            foreingKey: "cart_id"
        })
    }

    return CartProduct;
}