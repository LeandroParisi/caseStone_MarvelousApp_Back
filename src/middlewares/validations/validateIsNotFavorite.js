const { status, messages } = require('../../libs');
const { FireError } = require('../errorHandler/utils');
const { UsersCharacters, UsersComics } = require('../../models');

const isCharacterFavorite = (userId, favoriteId) => {
  const isFavorite = UsersCharacters.findOne({ userId, characterId: favoriteId });
  if (isFavorite) throw new FireError(status.conflict, messages.characterIsFavorite);
};

const validateIsNotFavorite = async (req, _res, next) => {
  const { type } = req.body;

  const { user: { id: userId } } = req;
  const { id: favoriteId } = req.params;

  try {
    if (type === 'characters') {
      await isCharacterFavorite(userId, favoriteId);
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateIsNotFavorite;
