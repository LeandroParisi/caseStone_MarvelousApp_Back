const axios = require('axios');

/**
 * Default fetcher for entire application
 * @param {string} method HTTP method to be used on request
 * @param {string} url Complet URL for the request: server + endpoint
 * @param {object} headers Request headers
 * @param {object} params Request params
 * @returns Object { ...responsePayload }
 * Any relevant information returned by the API.
 * It will always include a key message (even on errors)
 */
const to = async (method, url, params = null, headers = null) => {
  const options = {
    method,
    headers: headers && { ...headers },
    url,
    params: params && { ...params },
  };

  // try {
  const response = await axios(options);
  return response.data;
  // } catch (error) {
  //   return { message: error.response.data.message };
  // }
};

module.exports = to;
