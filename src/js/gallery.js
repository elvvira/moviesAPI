import { fetchData } from './data.js';
const galleryRecommended = document.getElementById('gallery-recommended');

const createGallery = async () => {
  const data = await fetchData('https://api.themoviedb.org/3/movie/popular?api_key=741ae538edadaed8a58d03ea1492445c&language=en-US&page=1');

  const fragment = document.createDocumentFragment();

  data.results.forEach(data => {
    // console.log(data);
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item', 'gallery__item--recommended');
    galleryItem.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`;
    fragment.append(galleryItem);

    const galleryCheckContainer = document.createElement('div');
    galleryCheckContainer.classList.add('gallery__check');
    galleryItem.append(galleryCheckContainer);
    const galleryCheck = document.createElement('img');
    galleryCheck.src = 'assets/icon-bookmark-empty.svg';
    galleryCheckContainer.append(galleryCheck);

    const galleryInfo = document.createElement('div');
    galleryInfo.classList.add('gallery__info', 'gallery__info--recommended');
    galleryItem.append(galleryInfo);
    const galleryYear = document.createElement('div');
    if (data.release_date) {
      galleryYear.textContent = data.release_date.substring(0, 4);
    } else {
      galleryYear.textContent = data.first_air_date.substring(0, 4);
    }
    galleryInfo.append(galleryYear);
    const gallerypoint1 = document.createElement('div');
    gallerypoint1.textContent = '·';
    galleryInfo.append(gallerypoint1);
    const galleryIconMovie = document.createElement('img');
    galleryIconMovie.src = 'assets/icon-nav-movies.svg';
    galleryInfo.append(galleryIconMovie);
    const galleryMovie = document.createElement('div');
    galleryMovie.textContent = data.media_type;
    galleryInfo.append(galleryMovie);
    const gallerypoint2 = document.createElement('div');
    gallerypoint2.textContent = '·';
    galleryInfo.append(gallerypoint2);
    const galleryLenguage = document.createElement('div');
    galleryLenguage.textContent = data.original_language;
    galleryInfo.append(galleryLenguage);

    const galleryTitle = document.createElement('div');
    galleryTitle.classList.add('gallery__title', 'gallery__title--recommended');
    if (data.title) {
      galleryTitle.textContent = data.title;
    } else {
      galleryTitle.textContent = data.name;
    }
    galleryItem.append(galleryTitle);
  });

  galleryRecommended.append(fragment);
};
export { createGallery };
