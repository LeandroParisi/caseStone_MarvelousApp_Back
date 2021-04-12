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

  Characters.associate = (models) => {
    Characters.hasMany(models.UsersCharacters, { as: 'favoriteCharacters', foreignKey: 'characterId' });
  };

  Characters.removeAttribute('id');

  return Characters;
};

module.exports = createCharacters;
