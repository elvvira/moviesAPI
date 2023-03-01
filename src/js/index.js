// El styles lo importamos aquí, ya se carga después al compilar todo
// import catIMage from '../assets/images/cat.jpeg'
// const img = document.createElement('img');
// img.src = catImage;
// document.body.append(img);

import '../scss/styles.scss';

import { createGallerySlide } from './gallery-slide';
import { createGallery } from './gallery';

createGallerySlide();
createGallery();
