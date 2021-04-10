const { Router } = require('express');
const { CharactersController } = require('../controllers');

const CharactersRouter = new Router();

CharactersRouter.get('/search', CharactersController.createUser);

CharactersRouter.get('/:id', CharactersController.getCharacterById);

CharactersRouter.post('/:id', CharactersController.addFavoriteCharacter);

CharactersRouter.put('/:id', CharactersController.editFavoriteCharacter);

module.exports = CharactersRouter;
