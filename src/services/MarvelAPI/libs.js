const thumbnailSizes = {
  xsmall: 'portrait_small',
  small: 'portrait_medium',
  medium: 'portrait_xlarge',
  large: 'portrait_fantastic',
  xlarge: 'portrait_uncanny',
};

const anotherLib = {};

const getKeys = (asset) => Object.keys(asset);

const getValues = (asset) => Object.values(asset);

module.exports = {
  thumbnailSizes,
  anotherLib,
  getKeys,
  getValues,
};
