const { Router } = require('express');
const { CharactersController } = require('../controllers');
const { validateToken, validateIsNotFavorite, addNewCharacter } = require('../middlewares/validations');

const CharactersRouter = new Router();

CharactersRouter.get('/search', validateToken, CharactersController.searchCharacters);

CharactersRouter.get('/:id', validateToken, CharactersController.getCharacterById);

CharactersRouter.post('/:id', addNewCharacter, validateToken, validateIsNotFavorite, CharactersController.addFavoriteCharacter);

CharactersRouter.delete('/:id', validateToken, CharactersController.deleteFavoriteCharacter);

module.exports = CharactersRouter;
