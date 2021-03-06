const { Op } = require('sequelize');
const { UsersComics } = require('../models');
const { status } = require('../libs');
const ComicsService = require('../services/MarvelAPI/ComicsService');

const searchComics = async (req, res, next) => {
  const { query } = req.query;
  const { id: userId } = req.user;

  try {
    const response = await ComicsService.searchComics(query, userId);
    res.status(status.ok).json({ result: [...response], type: 'comics' });
  } catch (error) {
    next(error);
  }
};

const getComicById = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const comic = await ComicsService.getComicById(id, userId);
  res.status(status.ok).json({ result: comic, type: 'comics' });
};

const addFavoriteComic = async (req, res) => {
  const { user: { id: userId } } = req;
  const { id: comicId } = req.params;

  const favoritedComic = await UsersComics.create({ userId, comicId });

  res.status(status.created).json({ status: status.created, favoritedComic });
};

const deleteFavoriteComic = async (req, res) => {
  const { user: { id: userId } } = req;
  const { id: comicId } = req.params;

  const favoritedComic = await UsersComics.destroy({
    where: { [Op.and]: [
      { userId }, { comicId },
    ],
    } });

  res.status(status.noContent).json({ status: status.created, favoritedComic });
};

module.exports = {
  searchComics,
  getComicById,
  addFavoriteComic,
  deleteFavoriteComic,
};
