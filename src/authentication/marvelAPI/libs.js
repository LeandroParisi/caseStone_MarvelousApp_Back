const charactersEndpoints = {
  searchCharacters: '/v1/public/characters',
  searchCharacterById: '/v1/public/characters/{characterId}',
  comicsByCharacterId: '/v1/public/characters/{characterId}/comics',
  seriesByCharacterId: '/v1/public/characters/{characterId}/series',
  storiesByCharacterId: '/v1/public/characters/{characterId}/stories',
};

const comicsEndpoints = {
  searchComics: '/v1/public/comics',
  searchCharacterById: '/v1/public/comics/{comicId}',
  charactersByComicId: '/v1/public/comics/{comicId}/characters',
  creatorsByComicId: '/v1/public/comics/{characterId}/creators',
};

/**
 * Assemble endpoint to fetch proper asset v1.0
 * @param {string} type Type of asset to search for: comics || characters
 * @param {number} id Id of the asset to be searched
 * @param {string} endpoint Endpoint to search for.
 * Currently we have the following endpoints mapped:
 * Characters: [
 * searchCharacters,
 * searchCharacterById,
 * comicsByCharacterId,
 * seriesByCharacterId,
 * storiesByCharacterId
 * ]
 *
 * Comics: [
 *  searchComics,
    searchCharacterById,
    charactersByComicId,
    creatorsByComicId
 * ]
 * @returns {string} endpoint ready to be sent to Marvel API
 */
const assembleEndpoint = (type, id, endpoint) => {
  if (type === 'characters') {
    if (id) {
      return `${charactersEndpoints[endpoint]}${id}`;
    }

    return `${charactersEndpoints[endpoint]}`;
  }

  if (type === 'comics') {
    if (id) {
      return `${comicsEndpoints[endpoint]}${id}`;
    }

    return `${comicsEndpoints[endpoint]}`;
  }
};

module.exports = {
  assembleEndpoint,
};
