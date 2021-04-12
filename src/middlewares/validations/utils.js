const isNameValid = (name) => !name || name.length >= 8;

const isEmailValid = (email) => {
  const regexEmail = /^[a-z][a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]{0,2})?$/;
  return regexEmail.test(email.toLowerCase());
};

const isEmailEmpty = (email) => typeof email === 'string' && email.length === 0;

const isPasswordEmpty = (password) => typeof password === 'string' && password.length === 0;

const isPasswordValid = (password) => {
  const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
  return passwordRegex.test(password);
};

module.exports = {
  isEmailValid, isNameValid, isPasswordValid, isEmailEmpty, isPasswordEmpty,
};
