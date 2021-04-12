module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('UsersCharacters',
      [{
        userId: 1,
        characterId: 1017297,
      },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('UsersCharacters', null, {});
  },
};
