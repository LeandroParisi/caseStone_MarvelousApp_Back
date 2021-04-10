const { Router } = require('express');
const { UsersController } = require('../controllers');
const { validateLogin } = require('../middlewares/validations');

const UsersRouter = new Router();

UsersRouter.post('/', UsersController.createUser);

UsersRouter.post('/login', validateLogin, UsersController.login);

UsersRouter.put('/:id', UsersController.updateUser);

UsersRouter.delete('/:id', UsersController.deleteUser);

module.exports = UsersRouter;
