const createUsersCharacters = (sequelize, DataTypes) => {
  const UsersCharacters = sequelize.define('UsersCharacters', {
    userId: {
      type: DataTypes.INTEGER,
    },
    characterId: DataTypes.INTEGER,
  });

  UsersCharacters.associate = (models) => {
    UsersCharacters.belongsTo(models.Users, { as: 'favoriteCharacters', foreignKey: 'userId' });
  };

  UsersCharacters.removeAttribute('id');

  return UsersCharacters;
};

module.exports = createUsersCharacters;
