const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=741ae538edadaed8a58d03ea1492445c';

const URLS = [
  {
    link: API_URL + '/trending/all/day' + API_KEY,
    title: 'Trending'
  },
  {
    link: API_URL + '/movie/popular' + API_KEY,
    title: 'Popular movies'
  },
  {
    link: API_URL + '/tv/popular' + API_KEY,
    title: 'Popular series'
  },
  {
    link: API_URL + '/movie/upcoming' + API_KEY,
    title: 'Upcoming series'
  }
];

const fetchData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
};

const getMovieDetails = async id => {
  const data = await fetchData(API_URL + '/movie/' + id + API_KEY);
  return data;
};
export { URLS, fetchData, getMovieDetails };
