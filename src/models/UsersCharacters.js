const createUsersCharacters = (sequelize, DataTypes) => {
  const UsersCharacters = sequelize.define('UsersCharacters', {
    userId: DataTypes.INTEGER,
    characterId: DataTypes.INTEGER,
  });

  UsersCharacters.associate = (models) => {
    UsersCharacters.belongsTo(models.Users, { as: 'favoriteCharacters', foreignKey: 'userId' });
  };

  return UsersCharacters;
};

module.exports = createUsersCharacters;
