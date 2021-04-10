const { Router } = require('express');
const { UsersController } = require('../controllers');

const UsersRouter = new Router();

UsersRouter.post('/', UsersController.createUser);

UsersRouter.post('/login', UsersController.login);

UsersRouter.put('/:id', UsersController.updateUser);

UsersRouter.delete('/:id', UsersController.deleteUser);

module.exports = UsersRouter;
