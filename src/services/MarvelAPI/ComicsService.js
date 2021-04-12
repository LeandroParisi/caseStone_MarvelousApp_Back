const { marvelEndpoints: { comics, comicsEndpoints } } = require('../../authentication/marvelAPI/libs');
const to = require('./to.js');
const generateURL = require('../../authentication/marvelAPI/marvelAPI');
const { UsersCharacters } = require('../../models');

const getComicById = async (id) => {
  const url = generateURL(comics, comicsEndpoints.searchComicsById, id);
  const { data: results } = await to('GET', url);
  const [comic] = [...results.results];
  console.log(comic);
  return null;

  // const queryUrl = `${url}&nameStartsWith=${query}`;


  // const favoriteCharacters = await getFavoriteCharacters(userId);

  // const serializedCharacters = chars.map((char) => serializeCharacter(char, favoriteCharacters));

  // return serializedCharacters;
};

module.exports = {
  getComicById,
};
