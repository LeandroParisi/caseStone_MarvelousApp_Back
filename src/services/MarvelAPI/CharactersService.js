const { marvelEndpoints: { characters, characterEndpoints } } = require('../../authentication/marvelAPI/libs');
const to = require('./to.js');
const generateURL = require('../../authentication/marvelAPI/marvelAPI');
const { serializeCharacter } = require('./utils');
const { UsersCharacters } = require('../../models');

const getFavoriteCharacters = async (userId) => {
  const favoriteCharacters = await UsersCharacters.findAll({ where: { userId } });
  return favoriteCharacters;
};

const searchCharacters = async (query, userId) => {
  const url = generateURL(characters, characterEndpoints.searchCharacters);
  const queryUrl = `${url}&nameStartsWith=${query}`;

  const { data: results } = await to('GET', queryUrl);

  const chars = [...results.results];

  const favoriteCharacters = await getFavoriteCharacters(userId);

  console.log('favoriteCharacters', favoriteCharacters);

  const serializedCharacters = chars.map((char) => serializeCharacter(char));

  console.log(serializedCharacters);

  return serializedCharacters;
};

// const getCharacterById = async () => {

// };

module.exports = {
  searchCharacters,
};
