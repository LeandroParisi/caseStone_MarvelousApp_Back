const errorMessages = {
  invalidEmail: 'Field "email" must be a valid email',
  invalidPassword: 'Field "password" must containt minimun eight characters at least one letter and one number',
  missingEmail: 'Field "email" is required',
  missingPassword: 'Field "password" is required',
  userNotFound: 'User not registered in our system',
  internalError: 'This is not your fault, we have had a system problem, please try again later',
  // invalidName: '"displayName" length must be at least 8 characters long',
  // duplicatedEmail: 'Usuário já existe',
  // invalidBody: 'Invalid request body',
  // emptyEmail: '"email" is not allowed to be empty',
  // emptyPassword: '"password" is not allowed to be empty',
  // invalidFields: 'Campos inválidos',
  // tokenNotFound: 'Token não encontrado',
  // invalidToken: 'Token expirado ou inválido',
  // missingTitle: '"title" is required',
  // missingContent: '"content" is required',
  // missingPost: 'Post não existe',
  // unauthorizedUser: 'Usuário não autorizado',

};

module.exports = errorMessages;
