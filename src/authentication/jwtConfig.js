require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const jwtSign = (payload, jwtSecret, jwtConfig) => (
  jwt.sign(payload, jwtSecret, jwtConfig)
);

const jwtConfig = {
  expiresIn: '150m',
  algorithm: 'HS256',
};

const createJWTPayload = (user) => ({
  iss: 'MarvelousApp',
  aud: 'identity',
  userData: user,
});

const generateToken = (user) => {
  const payload = createJWTPayload(user);
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = {
  secret,
  jwtConfig,
  createJWTPayload,
  jwtSign,
  generateToken,
};
