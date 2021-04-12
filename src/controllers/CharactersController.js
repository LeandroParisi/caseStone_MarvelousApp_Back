const { Op } = require('sequelize');
const { UsersCharacters } = require('../models');
const { status } = require('../libs');
// const { FireError } = require('../middlewares/errorHandler/utils');
const CharactersService = require('../services/MarvelAPI/CharactersService');

const searchCharacters = async (req, res, next) => {
  const { query } = req.query;
  const { id: userId } = req.user;

  try {
    const response = await CharactersService.searchCharacters(query, userId);
    res.status(status.ok).json({ result: [...response], type: 'characters' });
  } catch (error) {
    next(error);
  }
};

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const comic = await CharactersService.getCharacterById(id, userId);
  res.status(status.ok).json({ result: comic, type: 'comics' });
};

const addFavoriteCharacter = async (req, res) => {
  const { user: { id: userId } } = req;
  const { id: characterId } = req.params;
  const { asset } = req.body;
  console.log(asset);

  const favoritedCharacter = await UsersCharacters.create({ userId, characterId });

  res.status(status.created).json({ status: status.created, favoritedCharacter });
};

const deleteFavoriteCharacter = async (req, res) => {
  const { user: { id: userId } } = req;
  const { id: characterId } = req.params;

  const favoritedCharacter = await UsersCharacters.destroy({
    where: { [Op.and]: [
      { userId }, { characterId },
    ],
    } });

  res.status(status.noContent).json({ status: status.created, favoritedCharacter });
};

module.exports = {
  searchCharacters,
  getCharacterById,
  addFavoriteCharacter,
  deleteFavoriteCharacter,
};
