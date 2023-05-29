import axios from 'axios';
const API_KEY = '34781814-4d601342b4d8de3a0e1d81aeb';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesApi = (q, page = 1) => {
  return axios
    .get(BASE_URL, {
      params: {
        q,
        key: API_KEY,
        per_page: 12,
        image_type: 'photo',
        page,
      },
    })
    .then(res => res.data);
};
