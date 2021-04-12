module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        firstName: 'Leandro',
        middleName: 'Parisi',
        lastName: 'Belisário',
        email: 'leandro@gmail.com',
        password: 'leandro123',
        avatar: null,
      },
      {
        id: 2,
        firstName: 'Teste',
        middleName: 'Teste',
        lastName: 'Teste',
        email: 'teste@gmail.com',
        password: 'teste',
        avatar: null,
      }]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
