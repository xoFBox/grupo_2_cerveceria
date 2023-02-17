const { Router } = require("express");

const apiProductsController = require('../../controllers/api/apiProductsController')

const apiProductsRouter = Router();

apiProductsRouter.get('/api/products', apiProductsController.products)
apiProductsRouter.get('/api/products/:id', apiProductsController.detail)



module.exports = apiProductsRouter;