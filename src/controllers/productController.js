const productController = {
    detail(req, res){
        res.render('productDetail', {style: 'css/productDetail.css'});
    },

    cart(req, res){
        res.render('productCart', {style: '/css/productCart.css'});
    },
}

module.exports = productController;