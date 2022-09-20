import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const MY_API = 'a394f032d9659e3b1c5d6c8016e34e75';

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${MY_API}`);
  // console.log(response.data.results);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${MY_API}`);
  // console.log(response.data);
  return response.data;
};
export const getMovieCasts = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${MY_API}`
  );
  // console.log(response.data);
  return response.data;
};
export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${MY_API}`
  );
  // console.log(response.data.results);
  return response.data.results;
};
export const getMoviesByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${MY_API}&query=${query}`
  );
  // console.log(response.data.results);
  return response.data.results;
};
