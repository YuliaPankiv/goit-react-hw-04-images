import axios from 'axios';
const API_KEY = '34781814-4d601342b4d8de3a0e1d81aeb';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchApi = async (q, page = 1) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      q,
      page,

      key: API_KEY,
      per_page: 12,
      image_type: 'photo',
    },
  });
  return data;
};

// const BASEURL = 'https://pixabay.com/api/';
// const KEY = '33986302-c82bd3cb912661a9332354fb7';

// async function fetchApi(searchQuery, page) {
//   const URL = `${BASEURL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//   const response = await axios.get(URL);
//   return response.data;
// }
// export default fetchApi;