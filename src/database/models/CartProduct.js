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
        underscored: true
    };

    const CartProduct = sequelize.define(alias, cols, config);

    return CartProduct;
}