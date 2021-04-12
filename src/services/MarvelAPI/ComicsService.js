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

const searchComics = async (query, userId) => {
  const url = generateURL(comics, comicsEndpoints.searchComics);
  const queryUrl = `${url}&titleStartsWith=${query}`;

  const { data: results } = await to('GET', queryUrl);

  const chars = [...results.results];

  const favoriteComics = await getFavoriteComics(userId);

  const serializedComics = chars.map((char) => serializeComic(char, favoriteComics));

  return serializedComics;
};

module.exports = {
  getComicById,
  searchComics,
};
