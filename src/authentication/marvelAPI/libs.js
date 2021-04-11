const marvelEndpoints = {
  characters: 'characters',
  comics: 'comics',
};

const charactersEndpoints = {
  searchCharacters: {
    initial: '/v1/public/characters',
  },
  searchCharacterById: {
    initial: '/v1/public/characters/',
  },
  comicsByCharacterId: {
    initial: '/v1/public/characters/',
    final: '/comics',
  },
  seriesByCharacterId: {
    initial: '/v1/public/characters/',
    final: '/series',
  },
  storiesByCharacterId: {
    initial: '/v1/public/characters/',
    final: '/stories',
  },
};

const comicsEndpoints = {
  searchComics: {
    initial: '/v1/public/comics',
  },
  searchCharacterById: {
    initial: '/v1/public/comics/',
  },
  charactersByComicId: {
    initial: '/v1/public/comics/',
    final: '/characters',
  },
  creatorsByComicId: {
    initial: '/v1/public/comics/',
    final: '/creators',
  },
};

const assembleCharacterEndpoint = (endpoint, id) => {
  const { initial, final } = charactersEndpoints[endpoint];

  let assembledEndpoint = '';

  if (final && id) {
    assembledEndpoint = `${initial}${id}${final}`;
    return assembledEndpoint;
  }
  if (id) {
    assembledEndpoint = `${initial}${id}`;
    return assembledEndpoint;
  }
  assembledEndpoint = `${initial}`;
  return assembledEndpoint;
};

/**
 * Assemble endpoint to fetch proper asset v1.0
 * @param {string} type Type of asset to search for: comics || characters
 * @param {string} endpoint Endpoint to search for.
 *  * Currently we have the following endpoints mapped:
 * Characters: [
 * searchCharacters,
 * searchCharacterById,
 * comicsByCharacterId,
 * seriesByCharacterId,
 * storiesByCharacterId
 * ]
 * Comics: [
 *  searchComics,
    searchCharacterById,
    charactersByComicId,
    creatorsByComicId
 * ]
 * @param {number} id Id of the asset to be searched
 * @returns {string} endpoint ready to be sent to Marvel API
 */
const assembleEndpoint = (type, endpoint, id) => {
  if (type === 'characters') {
    return assembleCharacterEndpoint(endpoint, id);
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
  marvelEndpoints,
};
