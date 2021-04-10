'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_characters', {
      user_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      character_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users_characters')
  }
};
