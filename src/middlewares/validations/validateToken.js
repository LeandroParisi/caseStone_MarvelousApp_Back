const { decode } = require('../../authentication/jwtConfig');
const { status, messages } = require('../../libs');
const { FireError } = require('../errorHandler/utils');
const { Users } = require('../../models');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization || authorization.length === 0) {
      throw new FireError(status.unauthorized, messages.tokenNotFound);
    }
    const isUserValid = decode(authorization);
    const { email } = isUserValid.userData;
    const user = await Users.findOne({ where: { email } });
    req.user = user.dataValues;
    next();
  } catch (error) {
    if (error.message === messages.tokenNotFound) {
      next(error);
    } else {
      res.status(status.unauthorized).json({ message: messages.invalidToken });
    }
  }
};

module.exports = validateToken;
