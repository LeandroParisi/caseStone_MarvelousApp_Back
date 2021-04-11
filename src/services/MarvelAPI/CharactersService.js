// const rescue = require('rescue');
const { marvelEndpoints: { characters, characterEndpoints } } = require('../../authentication/marvelAPI/libs');
const to = require('./to.js');
const generateURL = require('../../authentication/marvelAPI/marvelAPI');

const searchCharacters = async (query) => {
  const url = generateURL(characters, characterEndpoints.searchCharacters);
  const queryUrl = `${url}&nam=${query}`;

  const { data: results } = await to('GET', queryUrl);
  return results;
};

// const getCharacterById = async () => {

// };

module.exports = {
  searchCharacters,
};
