// const { UsersCharacters } = require('../models');
// const { status, messages } = require('../libs');
// const { FireError } = require('../middlewares/errorHandler/utils');
const generateURL = require('../authentication/marvelAPI/marvelAPI');

const searchCharacters = async (req, res) => {
  const { query } = req.query;

  console.log(query);

  console.log(generateURL('characters', 'searchCharacterById'));
  res.status(200).json({ message: 'searchCharacters' });
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
