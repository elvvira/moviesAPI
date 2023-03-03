// El styles lo importamos aquí, ya se carga después al compilar todo
// import catIMage from '../assets/images/cat.jpeg'
// const img = document.createElement('img');
// img.src = catImage;
// document.body.append(img);

import '../scss/styles.scss';

import { createGallerySlide } from './gallery-slide';
import { createGallery } from './gallery';
import { URLS } from './data.js';
import { modalInformation } from './modal.js';

const galleryRecommended = document.getElementById('gallery-recommended');
const gallery = document.getElementById('gallery');

createGallerySlide();

const galleries = () => {
  for (let index = 1; index < URLS.length; index++) {
    createGallery(URLS[index]);
  }
};

galleries();
gallery.addEventListener('click', e => {
  modalInformation(e.target.dataset.id);
});

galleryRecommended.addEventListener('click', e => {
  // console.dir(e.target);
  modalInformation(e.target.dataset.id);
});
