const errorMessages = {
  invalidName: '"displayName" length must be at least 8 characters long',
  invalidEmail: '"email" must be a valid email',
  missingEmail: '"email" is required',
  invalidPassword: '"password" length must be 6 characters long',
  missingPassword: '"password" is required',
  duplicatedEmail: 'Usuário já existe',
  invalidBody: 'Invalid request body',
  emptyEmail: '"email" is not allowed to be empty',
  emptyPassword: '"password" is not allowed to be empty',
  invalidFields: 'Campos inválidos',
  tokenNotFound: 'Token não encontrado',
  invalidToken: 'Token expirado ou inválido',
  userNotFound: 'Usuário não existe',
  missingTitle: '"title" is required',
  missingContent: '"content" is required',
  missingPost: 'Post não existe',
  unauthorizedUser: 'Usuário não autorizado',

};

module.exports = errorMessages;
