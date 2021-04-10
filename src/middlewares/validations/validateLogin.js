const { status, messages } = require('../../libs');
const { FireError } = require('../errorHandler/utils');
const { isEmailValid, isPasswordEmpty } = require('./utils');
const { Users } = require('../../models');

const validateLogin = async (req, _res, next) => {
  const { email, password } = req.body;

  try {
    if (!email) throw new FireError(status.badRequest, messages.missingEmail);
    if (!password) throw new FireError(status.badRequest, messages.missingPassword);
    if (!isEmailValid(email)) throw new FireError(status.badRequest, messages.invalidEmail);
    if (isPasswordEmpty(password)) {
      throw new FireError(status.badRequest, messages.invalidPassword);
    }
    const registeredUser = await Users.findOne({ where: { email, password } });
    if (!registeredUser) throw new FireError(status.badRequest, messages.userNotFound);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateLogin;
