const db = require('../../database/models');

const apiProductController = {
    products(req, res){
        db.Product.findAll({include: {association: 'category'}})
            .then(response => {
                res.status(200).json({
                    count: response.length,
                    countByCategory: response.reduce((acc, product)=> ({...acc, [product.category.category_name]: acc[product.category.category_name]  += 1}), {Cerveza: 0, Comida: 0, Merchandasing: 0}),
                    products: response.map(prod=> productsResponse(prod))
                   })
            })
            
            .catch(error=> res.status(500).json('ERROR: DB_ERROR' + error))
    },

    detail(req, res){
        db.Product.findByPk(req.params.id, {include: [{association: 'category'}]})
            .then(response=>res.status(200).json(productsResponse(response)))
            .catch(error=> res.status(500).json('ERROR: DB_ERROR'+ error))
    },
}


const productsResponse = (prod) =>{
    const prodWithUrl = {
        id: prod.id,
        name: prod.name,
        description: prod.description,
        image: prod.image,
        price: prod.price,
        category: prod.category,
        urlImage: `localhost:3000/images/products/${prod.image}`
    }
    if(prod.id == "1"){
        prodWithUrl.ibu = prod.ibu
        prodWithUrl.alc = prod.alc
    }
    return prodWithUrl
}


module.exports = apiProductController;