module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UsersCharacters',
      [{
        userId: 1,
        characterId: 1,
      },
      {
        userId: 1,
        characterId: 2,
      },
      {
        userId: 1,
        characterId: 3,
      },
      {
        userId: 2,
        characterId: 4,
      },
      {
        userId: 2,
        characterId: 5,
      },
      {
        userId: 2,
        characterId: 6,
      }]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('UsersCharacters', null, {});
  },
};
