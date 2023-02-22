const { validationResult } = require('express-validator');

const db = require('../database/models');

const productController = {
    products(req, res){
        const allProducts = [];
        db.Product.findAll()
            .then(response => response.forEach(element =>allProducts.push(element.dataValues)))
            .then(()=> res.render('products/products', {style: '/css/products.css', allProducts}))
            .catch(error=> res.status(500).json('ERROR: DB_ERROR'))
    },

    comidas(req, res){
        db.Product.findAll({
            where: {
                product_category_id: 2
            }
        }).then(result=>res.render('products/comidas', {style: '/css/products.css', allProducts: result}))
    },
    cart(req,res){
        let aComprar =[];
        let total = 0;
        res.render('products/productCart', {style: '/css/productCart.css', total, aComprar});
    },
    cartCreate(req, res){
        const aComprar = [ {
           id: req.body.id,
           quantity: req.body.unidades,
           name: req.body.name,
           subtotal: req.body.unidades*req.body.price,
        }];
        let total= 0;
        for( let i=0; i<aComprar.length;i++){
            total= total+(aComprar[i].subtotal);
        };
        res.render('products/productCart', {style: '/css/productCart.css', aComprar, total});
    },

    detail(req, res){
        db.Product.findByPk(req.params.id)
            .then(response=> res.render('products/productDetail', {style: '/css/products.css', showProduct: response}))
            .catch(error=> res.status(500).json('ERROR: DB_ERROR'))
    },
    
    create(req, res){
        db.ProductCategory.findAll()
            .then(function(categories) {
                return res.render('products/productCreate', {style: '/css/productCreateMod.css', categories});
            })
    },

    edit(req, res){
        const findProduct = db.Product.findByPk(req.params.id);
        const findCategories = db.ProductCategory.findAll();
        Promise.all([findProduct, findCategories])
            .then(values=> {
                console.log(values[0].description)
                res.render('products/productUpdate',
                {
                  style: '/css/productCreateMod.css',
                  product: values[0],
                  categories: values[1]
                })
            })
            .catch(error=> res.status(500).json('ERROR: DB_ERROR' + error))
    },

    storage(req, res){
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            db.ProductCategory.findAll()
            .then(function(categories) {
                return res.render('products/productCreate', {
                        errors: resultValidation.mapped(),
                        style: '/css/productCreateMod.css',
                        oldData: req.body,
                        categories
                    })
            })
            .catch(error=> console.log(error))
        }
        else{
            const productToStore = {
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                price: req.body.price,
                product_category_id: req.body.category
            }
            if(req.body.product_category_id === "1") {
                productToStore.ibu = req.body.IBU
                productToStore.alc = req.body.ALC
            }

            db.Product.create(productToStore)
            .then(() => res.redirect('/products'))
            .catch(error=> res.status(500).json('ERROR: DB_ERROR' + error))
        }},

    update(req, res){
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render('products/productUpdate', {
                errors: resultValidation.mapped(),
                style: '/css/productCreateMod.css',
                oldData: req.body
            })}
        else{
            const productToStore = {
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                price: req.body.price,
                product_category_id: req.body.category
            }
            if(req.body.product_category_id === "1") {
                productToStore.ibu = req.body.IBU
                productToStore.alc = req.body.ALC
            }

            db.Product.update(productToStore,
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            .then(() => res.redirect('/products'))
            .catch(error=> res.status(500).json('ERROR: DB_ERROR' + error))
        }},
    destroy : (req, res) => {
       db.Product.destroy({
        where: {
            id: req.params.id
        }
       })
       .then(() => res.redirect('/products'))
       .catch(error=> res.status(500).json('ERROR: DB_ERROR' + error))
	}
}

module.exports = productController;