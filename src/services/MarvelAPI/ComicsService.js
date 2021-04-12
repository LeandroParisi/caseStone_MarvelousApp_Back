const { marvelEndpoints: { comics, comicsEndpoints } } = require('../../authentication/marvelAPI/libs');
const to = require('./to.js');
const generateURL = require('../../authentication/marvelAPI/marvelAPI');
const { UsersComics } = require('../../models');
const { serializeComic } = require('./utils');

const getFavoriteComics = async (userId) => {
  const favoriteComics = await UsersComics.findAll({ where: { userId } });
  const comicsIdArray = favoriteComics.map((comic) => comic.dataValues.comicId);
  return comicsIdArray;
};

const getComicById = async (id, userId) => {
  const url = generateURL(comics, comicsEndpoints.searchComicsById, id);
  const { data: results } = await to('GET', url);
  const [comic] = [...results.results];

  const favoriteComics = await getFavoriteComics(userId);

  const serializedComic = serializeComic(comic, favoriteComics);
  return serializedComic;
};

module.exports = {
  getComicById,
};
