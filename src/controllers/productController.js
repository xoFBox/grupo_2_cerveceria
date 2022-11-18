const fs = require('fs');
const path  = require('path');
const productDbPath = path.join(__dirname, '../data/productsData.json')
const allProducts = JSON.parse(fs.readFileSync( productDbPath, 'utf-8'))

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

    storage(req, res){
        allProducts.push({
            id: allProducts[allProducts.length-1].id +1,
            ...req.body,
            image: req.file ? req.file.filename : '1.IPA.jpg'
        })

        fs.writeFileSync(productDbPath, JSON.stringify(allProducts, null, 2));

        res.redirect('/');
    }
}

module.exports = productController;