const productController = {
    products(req, res){
        res.render('products/products', {style: '/css/products.css'});
    },

    cart(req, res){
        res.render('products/productCart', {style: '/css/productCart.css'});
    },

    detail(req, res){
        res.render('products/productDetail', {style: '/css/products.css'})
    },
    
    create(req, res){
        res.render('products/productCreate', {style: '/css/productCreateMod.css'});
    },

    update(req, res){
        res.render('products/productUpdate', {style: '/css/productCreateMod.css'});
    },
}

module.exports = productController;