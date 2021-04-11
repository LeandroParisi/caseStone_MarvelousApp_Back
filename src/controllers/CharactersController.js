// const { UsersCharacters } = require('../models');
// const { status, messages } = require('../libs');
// const { FireError } = require('../middlewares/errorHandler/utils');
// const rescue = require('rescue');
const CharactersService = require('../services/MarvelAPI/CharactersService');

const searchCharacters = async (req, res, next) => {
  const { query } = req.query;

  try {
    const response = await CharactersService.searchCharacters(query);
    res.status(200).json({ message: 'searchCharacters' });
  } catch (error) {
    next(error);
  }
};

const getCharacterById = async (req, res) => {
  res.status(200).json({ message: 'getCharacterById' });
};

const addFavoriteCharacter = async (req, res) => {
  res.status(200).json({ message: 'addFavoriteCharacter' });
};

const deleteFavoriteCharacter = async (req, res) => {
  res.status(200).json({ message: 'deleteFavoriteCharacter' });
};

module.exports = {
  searchCharacters,
  getCharacterById,
  addFavoriteCharacter,
  deleteFavoriteCharacter,
};
