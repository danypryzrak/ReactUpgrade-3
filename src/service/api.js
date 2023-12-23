import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?page=1&key=33168858-09b17812fdd05775e42993a92&image_type=photo&orientation=horizontal&per_page=12';

export const fetchByQyery = async (query, page = 1) => {
  const response = await axios(`${BASE_URL}&q=${query}&page=${page}`);
  return response.data.hits;
};
