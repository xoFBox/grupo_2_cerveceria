const productController = {
    products(req, res){
        res.render('products', {style: '/css/products.css'});
    },

    cart(req, res){
        res.render('products/productCart', {style: '/css/productCart.css'});
    },

    detail(req, res){
        res.render('productDetail', {style: '/css/products.css'})
    },
    
    create(req, res){
        res.render('products/productCreate', {style: '/css/productCreateMod.css'});
    },

    modifiy(req, res){
        res.render('products/productModify', {style: '/css/productCreateMod.css'});
    },
}

module.exports = productController;