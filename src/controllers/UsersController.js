const { Users, UsersCharacters, UsersComics, Characters } = require('../models');
const { status, resMessages } = require('../libs');
const { FireError } = require('../middlewares/errorHandler/utils');
const { generateToken } = require('../authentication/jwtConfig');
const { getUserFavoriteCharacters } = require('../services/MarvelAPI/CharactersService');
const { getUserFavoriteComics } = require('../services/MarvelAPI/ComicsService');

const createUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const token = generateToken({ email, password });

  await Users.create({ email, password, firstName, lastName });

  res.status(status.ok).json({ message: resMessages.loginOK, token, user: { email, password } });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = generateToken({ email, password });

  res.status(status.ok).json({ message: resMessages.loginOK, token, user: { email, password } });
};

const updateUser = async (req, res) => {
  res.status(status.ok).json({ message: 'updateUser' });
};

const deleteUser = async (req, res) => {
  res.status(status.ok).json({ message: 'deleteUser' });
};

const getFavoriteCharacters = async (req, res) => {
  const { id } = req.user;

  const favoriteCharacters = await getUserFavoriteCharacters(id);
  res.status(status.ok).json({ result: favoriteCharacters, type: 'characters' });
};

const getFavoriteComics = async (req, res) => {
  const { id } = req.user;

  const favoriteComics = await getUserFavoriteComics(id);
  res.status(status.ok).json({ result: favoriteComics, type: 'comics' });
};

module.exports = {
  createUser,
  login,
  updateUser,
  deleteUser,
  getFavoriteCharacters,
  getFavoriteComics,
};
