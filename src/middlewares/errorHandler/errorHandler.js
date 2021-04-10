const { sendError } = require('./utils');

const errorHandler = (error, _req, res, _next) => {
  sendError(error, res);
};

module.exports = errorHandler;
