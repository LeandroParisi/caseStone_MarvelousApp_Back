const { status, messages } = require('../../libs');
const { ThrowError } = require('../errorHandler/utils');
const { isEmailEmpty, isPasswordEmpty } = require('./utils');
const { Users } = require('../../models');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (isEmailEmpty(email)) throw new ThrowError(status.badRequest, messages.emptyEmail);
    if (isPasswordEmpty(password)) throw new ThrowError(status.badRequest, messages.emptyPassword);
    if (!email) throw new ThrowError(status.badRequest, messages.missingEmail);
    if (!password) throw new ThrowError(status.badRequest, messages.missingPassword);
    const registeredUser = await Users.findOne({ where: { email, password } });
    if (!registeredUser) throw new ThrowError(status.badRequest, messages.invalidFields);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateLogin;
