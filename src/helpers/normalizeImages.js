export const getNormalizeImages = arr =>
  arr.map(({ webformatURL, largeImageURL, id, tags }) => ({
    webformatURL,
    largeImageURL,
    id,
    tags,
  }));
