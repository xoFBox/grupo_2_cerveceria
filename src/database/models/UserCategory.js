module.exports = function(sequelize, dataTypes){

    const alias = 'UserCategory';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        category_name:{
            type: dataTypes.STRING(45)
        }
    }

    const config = {
        tableName: 'users_categories',
        timestamps: false
    }

    const UserCategory = sequelize.define(alias, cols, config)

    UserCategory.associate = function(models){
        UserCategory.hasMany(models.User,{
            as: 'users',
            foreignKey: 'category_id'
        })
    }

    return UserCategory
}