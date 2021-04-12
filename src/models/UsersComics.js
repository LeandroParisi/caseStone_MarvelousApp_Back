const createUsersComics = (sequelize, DataTypes) => {
  const UsersComics = sequelize.define('UsersComics', {
    userId: DataTypes.INTEGER,
    comicId: DataTypes.INTEGER,
  });

  UsersComics.associate = (models) => {
    UsersComics.belongsTo(models.Comics, { as: 'favoriteComics', foreignKey: 'comicId' });
  };

  UsersComics.removeAttribute('id');

  return UsersComics;
};

module.exports = createUsersComics;
