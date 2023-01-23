module.exports = function(sequelize, dataTypes){

    const alias = 'User';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        first_name:{
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        last_name:{
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        email:{
            type: dataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password:{
            type: dataTypes.STRING(200),
            allowNull: false,
        },
        address:{
            type: dataTypes.STRING(200),
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        category_id:{
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }

    const config ={
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.UserCategory,{
            as: 'category',
            foreignKey: 'category_id'
        })
    }

    return User
}