const { Op } = require('sequelize');
const { Users } = require('../../models');
const { FireError } = require('../errorHandler/utils');
const { status, messages } = require('../../libs');

const validateNewUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const isUserRegistered = await Users.findOne(
      { where: { [Op.and]: [{ email }, { password }] } },
    );
    console.log(isUserRegistered);
    if (isUserRegistered) throw new FireError(status.conflict, messages.userIsRegistered);

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateNewUser;
