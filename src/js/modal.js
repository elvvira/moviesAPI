import { getMovieDetails } from './data.js';

const modal = document.getElementById('modal');
const movieTitle = document.getElementById('movie-title');
const movieTime = document.getElementById('movie-time');
const tagline = document.getElementById('tagline');
const puntuation = document.getElementById('puntuation');
const year = document.getElementById('year');
const language = document.getElementById('language');
const statusMovie = document.getElementById('movie-status');
const genres = document.getElementById('genres');
const synopsis = document.getElementById('synopsis');
const image = document.getElementById('image');

const iconHome = document.getElementById('icon-home');

const modalInformation = async id => {
  modal.classList.add('modal--show');
  const data = await getMovieDetails(id);
  console.log(data);

  if (data.backdrop_path) {
    image.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`;
  }
  movieTitle.textContent = data.original_title;
  tagline.textContent = data.tagline;

  puntuation.textContent = String(data.vote_average).substring(0, 3) + ' /10';

  if (data.release_date) {
    year.textContent = data.release_date.substring(0, 4);
  } else {
    year.textContent = data.first_air_date.substring(0, 4);
  }
  movieTime.textContent = data.runtime + ' min';
  language.textContent = data.spoken_languages[0].english_name;
  statusMovie.textContent = data.status;
  synopsis.textContent = data.overview;

  createGenresBox(data);
};

const createGenresBox = data => {
  const fragment = document.createDocumentFragment();
  console.log(data);

  data.genres.forEach(genre => {
    const genresItem = document.createElement('p');
    genresItem.textContent = genre.name;
    genresItem.classList.add('gallery__subtitle');
    genresItem.classList.add('modal__genres-box');
    fragment.append(genresItem);
  });
  genres.append(fragment);
};

iconHome.addEventListener('click', () => {
  modal.classList.remove('modal--show');
});
export { modalInformation };
