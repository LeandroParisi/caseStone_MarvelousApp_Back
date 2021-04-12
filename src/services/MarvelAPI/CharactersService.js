const { marvelEndpoints: { characters, characterEndpoints } } = require('../../authentication/marvelAPI/libs');
const to = require('./to.js');
const generateURL = require('../../authentication/marvelAPI/marvelAPI');
const { serializeCharacter } = require('./utils');
const { UsersCharacters, Characters } = require('../../models');

const getFavoriteCharacters = async (userId) => {
  const favoriteCharacters = await UsersCharacters.findAll({ where: { userId } });
  const charsIdArray = favoriteCharacters.map((char) => char.dataValues.characterId);
  return charsIdArray;
};

const searchCharacters = async (query, userId) => {
  const url = generateURL(characters, characterEndpoints.searchCharacters);
  const queryUrl = `${url}&nameStartsWith=${query}`;

  const { data: results } = await to('GET', queryUrl);

  const chars = [...results.results];

  const favoriteCharacters = await getFavoriteCharacters(userId);

  const serializedCharacters = chars.map((char) => serializeCharacter(char, favoriteCharacters));

  return serializedCharacters;
};

const getCharacterById = async (id, userId) => {
  const url = generateURL(characters, characterEndpoints.searchCharacterById, id);
  const { data: results } = await to('GET', url);
  const [character] = [...results.results];

  const favoriteComics = await getFavoriteCharacters(userId);

  const serializedCharacter = serializeCharacter(character, favoriteComics);
  return serializedCharacter;
};

const getUserFavoriteCharacters = async (id) => {
  const favoriteCharacters = await UsersCharacters.findAll({
    where: { userId: id },
    include: { model: Characters, as: 'favoriteCharacters' },
  });

  const mappedFavoriteCharacters = favoriteCharacters.map((item) => item.favoriteCharacters);

  return mappedFavoriteCharacters;
};

module.exports = {
  searchCharacters,
  getCharacterById,
  getUserFavoriteCharacters,
};
