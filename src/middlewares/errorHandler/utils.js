const sendError = (err, res) => {
  const { statusCode, message } = err;

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
