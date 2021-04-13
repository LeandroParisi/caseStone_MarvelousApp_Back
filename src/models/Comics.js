const createComics = (sequelize, DataTypes) => {
  const Comics = sequelize.define('Comics', {
    comicId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
  });

  Comics.associate = (models) => {
    Comics.hasMany(models.UsersComics, { as: 'favoriteComics', foreignKey: 'comicId' });
  };

  Comics.removeAttribute('id');

  return Comics;
};

module.exports = createComics;
