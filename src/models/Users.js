const createUsers = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
  });

  Users.associate = (models) => {
    Users.hasMany(models.UsersCharacters, { as: 'favoriteCharacters', foreignKey: 'userId' });
    Users.hasMany(models.UsersComics, { as: 'favoriteComics', foreignKey: 'userId' });
  };

  return Users;
};

module.exports = createUsers;
