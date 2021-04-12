const { thumbnailSizes, getKeys, getValues, misc } = require('./libs');

const extractIdFromURI = (uri, idPosition) => {
  const splittedUri = uri.split('/');
  return splittedUri[idPosition];
};

const assembleThumbnailLink = (thumbnail, size) => {
  const { path, extension } = thumbnail;
  const splittedPath = path.split('/');
  const isImageNotAvaiable = splittedPath.includes(misc.missingImage);
  if (isImageNotAvaiable) {
    return null;
  }
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
      featureId: extractIdFromURI(resourceURI, 6),
    };
  });
  return mappedComics;
};

const mapCharacters = (characters) => {
  const mappedCharacters = characters.items.map((comic) => {
    const { name, resourceURI } = comic;
    return {
      name,
      featureId: extractIdFromURI(resourceURI, 6),
    };
  });
  return mappedCharacters;
};

const serializeCharacter = (character, favoriteCharacters) => {
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
    features: comics.returned !== 0 ? mapComics(comics) : null,
    thumbnails: parseThumbnails(thumbnail),
    isFavorited: favoriteCharacters.includes(id),
  };
};

const serializeComic = (comic, favoriteComics) => {
  const { id = null,
    title = null,
    characters = null,
    description = null,
    thumbnail = null,
    urls = null,
  } = comic;

  return {
    id: id || null,
    name: title || null,
    description: description || null,
    urls: urls || null,
    features: characters.returned !== 0 ? mapCharacters(characters) : null,
    thumbnails: parseThumbnails(thumbnail),
    // isFavorited: favoriteComics.includes(id),
  };
};

module.exports = {
  serializeCharacter,
  extractIdFromURI,
  serializeComic,
};
