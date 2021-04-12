const axios = require('axios');
const { status, messages } = require('../../libs');
const { FireError } = require('../../middlewares/errorHandler/utils');

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

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw new FireError(status.internalError, messages.internalError);
  }
};

module.exports = to;
