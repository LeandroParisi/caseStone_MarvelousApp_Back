const { Characters } = require('../../models');

const addNewCharacter = async (req, res, next) => {
  const { asset: { id, name, thumbnails: { xlarge }} } = req.body;

  const isCharacterAdded = await Characters.findOne({ where: { characterId: id }});

  if (!isCharacterAdded) {
    await Characters.create({
      characterId: id,
      name,
      thumbnail: xlarge,
    });
  }

  next();
};

module.exports = addNewCharacter;
