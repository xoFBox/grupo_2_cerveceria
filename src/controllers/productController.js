const productController = {
    detail(req, res){
        res.render('productDetail', {style: 'css/productDetail.css'});
    },

    cart(req, res){
        res.render('productCart', {style: '/css/productCart.css'});
    },

    create(req, res){
        res.render('productCreate', {style: '/css/productCreateMod.css'});
    },

    modifiy(req, res){
        res.render('productModify', {style: '/css/productCreateMod.css'});
    },
}

module.exports = productController;