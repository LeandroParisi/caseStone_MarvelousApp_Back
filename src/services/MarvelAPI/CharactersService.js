const { marvelEndpoints: { characters, characterEndpoints } } = require('../../authentication/marvelAPI/libs');
const to = require('./to.js');
const generateURL = require('../../authentication/marvelAPI/marvelAPI');

const searchCharacters = async (query) => {
  const url = generateURL(characters, characterEndpoints.searchCharacters);
  const queryUrl = `${url}&name=${query}`;
  console.log(queryUrl);
  const response = await to('GET', queryUrl);

  console.log(response);
};

// const getCharacterById = async () => {

// };

module.exports = {
  searchCharacters,
};
