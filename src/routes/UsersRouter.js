const { Router } = require('express');
const { UsersController } = require('../controllers');
const { validateLogin, validateToken, validateIsNewUser } = require('../middlewares/validations');

const UsersRouter = new Router();

UsersRouter.post('/', validateIsNewUser, UsersController.createUser);

UsersRouter.post('/login', validateLogin, UsersController.login);

UsersRouter.put('/:id', UsersController.updateUser);

UsersRouter.delete('/:id', UsersController.deleteUser);

UsersRouter.get('/favoriteCharacters', validateToken, UsersController.getFavoriteCharacters);

UsersRouter.get('/favoriteComics', validateToken, UsersController.getFavoriteComics);

module.exports = UsersRouter;
