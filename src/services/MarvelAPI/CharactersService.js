const { marvelEndpoints: { characters, characterEndpoints } } = require('../../authentication/marvelAPI/libs');
const to = require('./to.js');
const generateURL = require('../../authentication/marvelAPI/marvelAPI');
const { serializeCharacter } = require('./utils');

const searchCharacters = async (query) => {
  const url = generateURL(characters, characterEndpoints.searchCharacters);
  const queryUrl = `${url}&nameStartsWith=${query}`;

  const { data: results } = await to('GET', queryUrl);

  const chars = [...results.results];

  const serializedCharacters = chars.map((char) => serializeCharacter(char));

  return serializedCharacters;
};

// const getCharacterById = async () => {

// };

module.exports = {
  searchCharacters,
};
