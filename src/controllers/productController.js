const db = require('../database/models')

const productController = {
    products(req, res){
        const allProducts = [];
        db.Product.findAll()
            .then(response => response.forEach(element =>allProducts.push(element.dataValues)))
            .then(()=> res.render('products/products', {style: '/css/products.css', allProducts} ))
            .catch(error=> res.status(500).json('ERROR: DB_ERROR'))
    },

    comidas(req, res){
        res.render('products/comidas', {style: '/css/products.css', allProducts} );
    },

    cart(req, res){
        let aComprar = [{
            id:1,
            name: "IPA",
            price: 500,
            quantity: 3,
        }];
        let total= 0;
        for( let i=0; i<aComprar.length;i++){
            total= total+(aComprar[i].quantity*aComprar[i].price);
        }

        res.render('products/productCart', {style: '/css/productCart.css', aComprar, total});
    },

    detail(req, res){
        db.Product.findByPk(req.params.id)
            .then(response=> res.render('products/productDetail', {style: '/css/products.css', showProduct: response}))
            .catch(error=> res.status(500).json('ERROR: DB_ERROR'))
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