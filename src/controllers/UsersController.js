const { Users } = require('../models');
const { status, messages } = require('../libs');
const { FireError } = require('../middlewares/errorHandler/utils');
const { jwtConfig, createJWTPayload, jwtSign } = require('../authentication/jwtConfig');

const createUser = async (req, res) => {
  res.status(200).json({message: "createUser"})
}

const login = async (req, res) => {
  res.status(200).json({message: "login"})
}

const updateUser = async (req, res) => {
  res.status(200).json({message: "updateUser"})
}

const deleteUser = async (req, res) => {
  res.status(200).json({message: "deleteUser"})
}

modules.exports = {
  createUser,
  login,
  updateUser,
  deleteUser,
}
