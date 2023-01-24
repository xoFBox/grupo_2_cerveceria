module.exports = function(sequelize, dataTypes){
    const alias = "Payment";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        method: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        dues: {
            type: dataTypes.INTEGER,
            allowNull: true,
        }

    };
    const config = {
        tableName: "payments",
        timestamps: false, 
    };

    const Payment = sequelize.define(alias, cols, config);

    Payment.associate = function(models){
        Payment.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "payment_id",
        })
    }

    return Payment;

}