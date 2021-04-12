const createCharacters = (sequelize, DataTypes) => {
  const Characters = sequelize.define('Characters', {
    characterId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
  });

  Characters.removeAttribute('id');

  return Characters;
};

module.exports = createCharacters;
