const { Users } = require('../models');
const { status, resMessages } = require('../libs');
const { FireError } = require('../middlewares/errorHandler/utils');
const { generateToken } = require('../authentication/jwtConfig');

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

module.exports = {
  createUser,
  login,
  updateUser,
  deleteUser,
};
