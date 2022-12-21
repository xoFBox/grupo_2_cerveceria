const fs = require('fs');
const path  = require('path');
const productDbPath = path.join(__dirname, '../data/productsData.json')
const allProducts = JSON.parse(fs.readFileSync( productDbPath, 'utf-8'))

const productController = {
    products(req, res){
        res.render('products/products', {style: '/css/products.css', allProducts} );
    },

    cart(req, res){
        res.render('products/productCart', {style: '/css/productCart.css'});
    },

    detail(req, res){
        var showProduct = allProducts.find(product =>  product.id == req.params.id);
        res.render('products/productDetail', {style: '/css/products.css', showProduct});
    },
    
    create(req, res){
        res.render('products/productCreate', {style: '/css/productCreateMod.css'});
    },

    edit(req, res){
        const product = allProducts.find(p=> p.id == req.params.id)
        if (!product) return res.redirect('/')
        res.render('products/productUpdate', {style: '/css/productCreateMod.css', product});
    },

    storage(req, res){
        allProducts.push({
            id: allProducts[allProducts.length-1].id +1,
            ...req.body,
            image: req.file ? req.file.filename : '1.IPA.jpg'
        })

        fs.writeFileSync(productDbPath, JSON.stringify(allProducts, null, 2));

        res.redirect('/');
    },

    update(req, res){
        const index = allProducts.findIndex(prod=> prod.id == req.params.id)
        if( index === -1) return res.redirect('/products')
		allProducts[index] = {
			id: req.params.id,
			...req.body,
			image: req.file ? req.file.filename : allProducts[index].image
		}
		fs.writeFileSync(productDbPath, JSON.stringify(allProducts, null, 2))
		res.redirect('/products')
    },
    destroy : (req, res) => {
        
		let newProducts = allProducts.filter(prod => prod.id != req.params.id)
		fs.writeFileSync(productDbPath, JSON.stringify(newProducts, null, " "))
		res.redirect('/')
	}
}

module.exports = productController;