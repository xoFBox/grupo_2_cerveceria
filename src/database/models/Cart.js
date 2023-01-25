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
        }

    };
    const config = {
        tableName: "carts",
        timestamps: false, 
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models){
        Cart.hasMany(models.Payments, {
            as: "cart",
            foreingKey: "payment_id"
        });
        Cart.belongsTo(models.User, {
            as: "user",
            foreingKey: "user_id"
        });
        Cart.hasMany(models.CartItem, {
            as: "cart",
            foreingKey: "item_id"
        })
       
    };
    return Cart;
   
}