const productController = {
    detail(req, res){
        res.render('productDetail', {style: 'css/productDetail.css'});
    }
}

module.exports = productController;