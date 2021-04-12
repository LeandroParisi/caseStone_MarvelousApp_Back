const { UsersComics } = require('../models');
const { status, messages } = require('../libs');
const { FireError } = require('../middlewares/errorHandler/utils');
const ComicsService = require('../services/MarvelAPI/ComicsService');

const searchComics = async (req, res) => {
  res.status(200).json({ message: 'searchComics' });
};

const getComicById = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const comic = await ComicsService.getComicById(id, userId);
  res.status(status.ok).json({ result: comic, type: 'comics' });
};

const addFavoriteComic = async (req, res) => {
  res.status(200).json({ message: 'addFavoriteComic' });
};

const deleteFavoriteComic = async (req, res) => {
  res.status(200).json({ message: 'deleteFavoriteComic' });
};

module.exports = {
  searchComics,
  getComicById,
  addFavoriteComic,
  deleteFavoriteComic,
};
