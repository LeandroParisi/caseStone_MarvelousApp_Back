const { UsersComics } = require('../models');
const { status, messages } = require('../libs');
const { FireError } = require('../middlewares/errorHandler/utils');

const searchComics = async (req, res) => {
  res.status(200).json({message: "searchComics"})
}

const getComicById = async (req, res) => {
  res.status(200).json({message: "getComicById"})
}

const addFavoriteComic = async (req, res) => {
  res.status(200).json({message: "addFavoriteComic"})
}

const deleteFavoriteComic = async (req, res) => {
  res.status(200).json({message: "deleteFavoriteComic"})
}

module.exports = {
  searchComics,
  getComicById,
  addFavoriteComic,
  deleteFavoriteComic,
}
