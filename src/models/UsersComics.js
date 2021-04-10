const createUsersComics = (sequelize, DataTypes) => {
  const UsersComics = sequelize.define('UsersComics', {
    userId: DataTypes.INTEGER,
    comicId: DataTypes.INTEGER,
  });

  UsersComics.associate = (models) => {
    UsersComics.belongsTo(models.Users, { as: 'favoriteComics', foreignKey: 'userId' });
  };

  return UsersComics;
};

module.exports = createUsersComics;
