const extractIdFromURI = (uri, idPosition) => {
  const splittedUri = uri.split('/');
  return splittedUri[idPosition];
};

const serializeCharacter = (character) => {
  const { id, name, comics, description, thumbnail, urls } = character;
  return {
    id,
    name,
    comics: comics.items.map((comic) => (
      {
        name: comic.name,
        comicId: extractIdFromURI(comic.uri, 7),
      }
    )),

  };
};
