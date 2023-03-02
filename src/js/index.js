// El styles lo importamos aquí, ya se carga después al compilar todo
// import catIMage from '../assets/images/cat.jpeg'
// const img = document.createElement('img');
// img.src = catImage;
// document.body.append(img);

import '../scss/styles.scss';

import { createGallerySlide } from './gallery-slide';
import { createGallery } from './gallery';
import { URLS } from './data.js';
// const gallery = document.getElementById('gallery');
const galleryRecommended = document.getElementById('gallery-recommended');

createGallerySlide();

const galleries = () => {
  for (let index = 1; index < URLS.length; index++) {
    createGallery(URLS[index]);
  }
};

galleries();

galleryRecommended.addEventListener('click', e => {
  console.dir(e.target);
});
