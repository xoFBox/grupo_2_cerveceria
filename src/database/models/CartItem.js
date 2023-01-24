module.exports = function(sequelize, dataTypes){
    const alias = "CartItem";
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
        }

    };
    const config = {
        tableName: "carts_items",
        timestamps: false, 
    };

    const CartItem = sequelize.define(alias,cols, config);

    CartItem.associate = function(models){
        CartItem.belongsTo(models.Product, {
            as: "products",
            foreingKey: "poroduct_id"
        });
        CartItem.belongsTo(models.Cart, {
            as: "cart",
            foreingKey: "item_id"
        })
    }

    return CartItem;
}