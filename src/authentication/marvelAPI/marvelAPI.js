require('dotenv').config();
const md5 = require('md5');
const { assembleEndpoint } = require('./libs');

const MARVEL_URL = 'https://gateway.marvel.com';

const PUBLIC_KEY = process.env.MARVELAPI_PUBLIC_KEY;
const PRIVATE_KEY = process.env.MARVELAPI_PRIVATE_KEY;

/**
 * Assemble full url to fetch proper asset v1.0
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

 * @returns {string} full url ready to be sent to Marvel API
 */
const assembleRequestUrl = (type, endpoint, id) => {
  const timeStamp = Date.now();
  const tsEndpoint = `ts=${timeStamp}`;

  const keyEndpoint = `apikey=${PUBLIC_KEY}`;

  const hashEndpoint = `hash=${md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY)}`;

  const url = `${MARVEL_URL}${assembleEndpoint(type, endpoint, id)}?${tsEndpoint}&${keyEndpoint}&${hashEndpoint}`;

  return url;
};

module.exports = assembleRequestUrl;
