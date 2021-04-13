const { Comics } = require('../models');

const addNewComic = async (req, _res, next) => {
  const { asset: { id, name, thumbnails: { xlarge } } } = req.body;

  const isComicAdded = await Comics.findOne({ where: { comicId: id } });

  if (!isComicAdded) {
    await Comics.create({
      comicId: id,
      name,
      thumbnail: xlarge,
    });
  }

  next();
};

module.exports = addNewComic;
