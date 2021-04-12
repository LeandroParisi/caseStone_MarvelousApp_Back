const { Router } = require('express');
const { UsersController } = require('../controllers');
const { validateLogin, validateToken } = require('../middlewares/validations');

const UsersRouter = new Router();

UsersRouter.post('/', UsersController.createUser);

UsersRouter.post('/login', validateLogin, UsersController.login);

UsersRouter.put('/:id', UsersController.updateUser);

UsersRouter.delete('/:id', UsersController.deleteUser);

UsersRouter.get('/favoriteCharacters/:id', validateToken, UsersController.getFavoriteCharacters);

UsersRouter.get('/favoriteComics/:id', validateToken, UsersController.getFavoriteComics);

module.exports = UsersRouter;
