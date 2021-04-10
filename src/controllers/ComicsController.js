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

const editFavoriteComic = async (req, res) => {
  res.status(200).json({message: "editFavoriteComic"})
}

modules.exports = {
  searchComics,
  getComicById,
  addFavoriteComic,
  editFavoriteComic,
}
