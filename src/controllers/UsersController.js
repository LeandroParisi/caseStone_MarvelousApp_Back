const { Users, UsersCharacters, UsersComics, Characters } = require('../models');
const { status, resMessages } = require('../libs');
const { FireError } = require('../middlewares/errorHandler/utils');
const { generateToken } = require('../authentication/jwtConfig');
const { getUserFavoriteCharacters } = require('../services/MarvelAPI/CharactersService');
const { getUserFavoriteComics } = require('../services/MarvelAPI/ComicsService');

const createUser = async (req, res) => {
  res.status(status.ok).json({ message: 'createUser' });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = generateToken({ email, password });

  res.status(status.ok).json({ message: resMessages.loginOK, token });
};

const updateUser = async (req, res) => {
  res.status(status.ok).json({ message: 'updateUser' });
};

const deleteUser = async (req, res) => {
  res.status(status.ok).json({ message: 'deleteUser' });
};

const getFavoriteCharacters = async (req, res) => {
  const { id } = req.params;

  const favoriteCharacters = await getUserFavoriteCharacters(id);
  res.status(status.ok).json(favoriteCharacters);
};

const getFavoriteComics = async (req, res) => {
  const { id } = req.params;

  const favoriteComics = await getUserFavoriteComics(id);
  res.status(status.ok).json(favoriteComics);
};

module.exports = {
  createUser,
  login,
  updateUser,
  deleteUser,
  getFavoriteCharacters,
  getFavoriteComics,
};
