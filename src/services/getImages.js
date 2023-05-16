export const getImages = (searchValue, page) => {
  const API_KEY = '34781814-4d601342b4d8de3a0e1d81aeb';
  const BASE_URL = 'https://pixabay.com/api';
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  )
    .then(res => res.json())
    .catch(error => error.message);
};
