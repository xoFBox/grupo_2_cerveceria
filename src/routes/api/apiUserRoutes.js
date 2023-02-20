const { Router } = require('express');
const apiUserController = require('../../controllers/api/apiUserController');

const apiUserRoute = Router();

apiUserRoute.get('/api/users', apiUserController.allUsers);

apiUserRoute.get('/api/users/:id', apiUserController.userDetail);

module.exports = apiUserRoute;