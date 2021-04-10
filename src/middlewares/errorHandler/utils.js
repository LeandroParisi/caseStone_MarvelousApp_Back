const { status, messages } = require('../../libs');

const sendError = (err, res) => {
  const { statusCode, message } = err;

  if (!statusCode) {
    return res.status(status.internalError).json({
      message: messages.internalError,
    });
  }

  res.status(statusCode).json({
    message,
  });
};

class FireError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = {
  sendError,
  FireError,
};
