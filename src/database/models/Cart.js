module.exports = function(sequelize, dataTypes){
    const alias="Cart";
    const cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        total: {
            type: dataTypes.DECIMAL,
            allowNull: false,
        },
        payment_id: {
            type: dataTypes.INTEGER,
        }

    };
    const config = {
        tableName: "carts",
        timestamps: false, 
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models){
        Cart.hasMany(models.Payment, {
            as: "payment",
            foreingKey: "payment_id"
        });
        Cart.belongsTo(models.User, {
            as: "user",
            foreingKey: "user_id"
        });
        Cart.belongsToMany(models.Product, {
            through: "carts_products",
            as: "products",
            foreingKey: "cart_id",
            otherKey: "product_id"
        })
    };
    
    return Cart;
}