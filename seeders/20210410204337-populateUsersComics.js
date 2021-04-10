'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UsersComics', 
      [{
        userId: 1,
        comicId: 1,
      },
      {
        userId: 1,
        comicId: 2,
      },
      {
        userId: 1,
        comicId: 3,
      },
      {
        userId: 2,
        comicId: 4,
      },
      {
        userId: 2,
        comicId: 5,
      },
      {
        userId: 2,
        comicId: 6,
      }],
    )},

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('UsersComics', null, {});
  }
};
