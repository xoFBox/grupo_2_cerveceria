const productController = {
    products(req, res){
        res.render('products', {style: '/css/products.css'});
    },

    cart(req, res){
        res.render('productCart', {style: '/css/productCart.css'});
    },

    detail(req, res){
        res.render('productDetail', {style: '/css/products.css'})
    }
}

module.exports = productController;