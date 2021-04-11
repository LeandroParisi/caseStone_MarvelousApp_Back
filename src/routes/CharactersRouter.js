const { Router } = require('express');
const { CharactersController } = require('../controllers');
const { validateToken } = require('../middlewares/validations');

const CharactersRouter = new Router();

CharactersRouter.get('/search', CharactersController.searchCharacters);

CharactersRouter.get('/:id', CharactersController.getCharacterById);

CharactersRouter.post('/:id', validateToken, CharactersController.addFavoriteCharacter);

CharactersRouter.delete('/:id', CharactersController.deleteFavoriteCharacter);

module.exports = CharactersRouter;
