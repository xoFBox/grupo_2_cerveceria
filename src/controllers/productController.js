const { parse } = require('dotenv');
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
        const aComprar = [ {
           id: req.body.id,
           quantity: req.body.unidades,
           name: req.body.name,
           subtotal: req.body.unidades*req.body.price,
        }];
        let total= 0;
        for( let i=0; i<aComprar.length;i++){
            total= total+(aComprar[i].subtotal);
        };
        console.log(aComprar);

        res.render('products/productCart', {style: '/css/productCart.css', aComprar, total});
    },

/*/
    delete(req, res){
        db.Cart.delete({
            where: {
                product_id: req.body.id/req.params.id
            }
        })

    },
/*/
    /*/
    buy(req, res){
        db.Cart.create({
            total: req.body.total,
            payment_id: req.body.pagar,
            user_id: req.session.user,
        })
    },
    /*/

    detail(req, res){
        db.Product.findByPk(req.params.id)
            .then(response=> res.render('products/productDetail', {style: '/css/products.css', showProduct: response}))
            .catch(error=> res.status(500).json('ERROR: DB_ERROR'))
    },
    
    create(req, res){
        //res.render('products/productCreate', {style: '/css/productCreateMod.css'});
        db.Product.findAll()
            .then(function(product) {
                return res.render('products/productCreate', {style: '/css/productCreateMod.css', product: product});
            })
    },

    edit(req, res){
        /*
        const product = allProducts.find(p=> p.id == req.params.id)
        if (!product) return res.redirect('/')
        res.render('products/productUpdate', {style: '/css/productCreateMod.css', product});
        */
        db.Product.findByPk(req.params.id)
        .then(product=> res.render('products/productUpdate', {style: '/css/productCreateMod.css', product: product}))
        .catch(error=> res.status(500).json('ERROR: DB_ERROR'))
    },

    storage(req, res){
        /*
        allProducts.push({
            id: allProducts[allProducts.length-1].id +1,
            ...req.body,
            image: req.file ? req.file.filename : '1.IPA.jpg'
        })

        fs.writeFileSync(productDbPath, JSON.stringify(allProducts, null, 2));

        res.redirect('/');
        */
       db.Product.create({
           name: req.body.name,
           description: req.body.description,
           image: req.file.filename,
           ibu: req.body.IBU,
           alc: req.body.ALC,
           price: req.body.price,
           product_category_id: req.body.category
       })
       .then(() => res.redirect('/products'))
       .catch(error=> res.status(500).json('ERROR: DB_ERROR' + error))
    },

    update(req, res){
        /*
        const index = allProducts.findIndex(prod=> prod.id == req.params.id)
        if( index === -1) return res.redirect('/products')
		allProducts[index] = {
			id: req.params.id,
			...req.body,
			image: req.file ? req.file.filename : allProducts[index].image
		}
		fs.writeFileSync(productDbPath, JSON.stringify(allProducts, null, 2))
		res.redirect('/products')
        */
       db.Product.update({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            ibu: req.body.IBU,
            alc: req.body.ALC,
            price: req.body.price,
            product_category_id: parseInt(req.body.category)
        },
        {
            where: {
                id: req.params.id,
            },
        }
       )
       .then(() => res.redirect('/products'))
       .catch(error=> res.status(500).json('ERROR: DB_ERROR' + error))
    },
    destroy : (req, res) => {
        /*
		let newProducts = allProducts.filter(prod => prod.id != req.params.id)
		fs.writeFileSync(productDbPath, JSON.stringify(newProducts, null, " "))
		res.redirect('/')
        */
       db.Product.destroy({
        where: {
            id: req.params.id
        }
       })
       .then(() => res.redirect('/products'))
       .catch(error=> res.status(500).json('ERROR: DB_ERROR' + error))
	}
}

module.exports = productController;