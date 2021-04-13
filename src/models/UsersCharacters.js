const createUsersCharacters = (sequelize, DataTypes) => {
  const UsersCharacters = sequelize.define('UsersCharacters', {
    userId: {
      type: DataTypes.INTEGER,
    },
    characterId: DataTypes.INTEGER,
  });

  UsersCharacters.associate = (models) => {
    UsersCharacters.belongsTo(models.Characters, { as: 'favoriteCharacters', foreignKey: 'characterId' });
  };

  UsersCharacters.removeAttribute('id');

  return UsersCharacters;
};

module.exports = createUsersCharacters;
