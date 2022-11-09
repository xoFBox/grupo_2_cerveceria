const productController = {
    detail(req, res){
        res.render('products/productDetail', {style: 'css/productDetail.css'});
    },

    cart(req, res){
        res.render('products/productCart', {style: '/css/productCart.css'});
    },

    create(req, res){
        res.render('products/productCreate', {style: '/css/productCreateMod.css'});
    },

    modifiy(req, res){
        res.render('products/productModify', {style: '/css/productCreateMod.css'});
    },
}

module.exports = productController;