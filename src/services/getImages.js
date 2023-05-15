export const getImages = searchValue => {
  const API_KEY = '34781814-4d601342b4d8de3a0e1d81aeb';
  const BASE_URL = 'https://pixabay.com/api';
  return fetch(`${BASE_URL}/?key=${API_KEY}&q=${searchValue}`);
};
