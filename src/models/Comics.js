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

  Comics.removeAttribute('id');

  return Comics;
};

module.exports = createComics;
