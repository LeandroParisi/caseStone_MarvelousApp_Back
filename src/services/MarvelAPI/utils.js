const { thumbnailSizes, getKeys, getValues } = require('./libs');

const extractIdFromURI = (uri, idPosition) => {
  const splittedUri = uri.split('/');
  return splittedUri[idPosition];
};

const assembleThumbnailLink = (thumbnail, size) => {
  const { path, extension } = thumbnail;
  return `${path}/${size}.${extension}`;
};

const parseThumbnails = (thumbnail) => {
  const returnedKeys = getKeys(thumbnailSizes);
  const pathValues = getValues(thumbnailSizes);

  const parsedThumbnails = {};

  returnedKeys.forEach((key, index) => {
    parsedThumbnails[key] = assembleThumbnailLink(thumbnail, pathValues[index]);
  });

  return parsedThumbnails;
};

const mapComics = (comics) => {
  const mappedComics = comics.items.map((comic) => {
    const { name, resourceURI } = comic;
    return {
      name,
      comicId: extractIdFromURI(resourceURI, 6),
    };
  });
  return mappedComics;
};

const serializeCharacter = (character) => {
  const { id = null,
    name = null,
    comics = null,
    description = null,
    thumbnail = null,
    urls = null,
  } = character;

  return {
    id: id || null,
    name: name || null,
    description: description || null,
    urls: urls || null,
    comics: comics.returned !== 0 ? mapComics(comics) : null,
    thumbnails: parseThumbnails(thumbnail),
  };
};

module.exports = {
  serializeCharacter,
  extractIdFromURI,
};
