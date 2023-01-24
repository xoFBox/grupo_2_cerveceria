module.exports = function(sequelize, dataTypes){

    const alias = 'ProductCategory';

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
        tableName: 'products_categories',
        timestamps: false
    }

    const ProductCategory = sequelize.define(alias, cols, config)

    ProductCategory.associate = function(models){
        ProductCategory.hasMany(models.Product,{
            as: 'products',
            foreignKey: 'product_category_id'
        })
    }

    return ProductCategory;
}