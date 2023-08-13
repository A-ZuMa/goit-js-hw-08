// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
// gallery.addEventListener('click', handlerClick);

// console.log(galleryItems);

function createImages(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallary__item"> 
         <a class="galary__link" href="${original}"> 
         <img class="gallery__image" src="${preview}" alt="${description}"/>
         </a> 
         </li>`
    )
    .join('');
} // Збираємо усі об'єкти та робимо розмітку для HTML

gallery.insertAdjacentHTML('beforeend', createImages(galleryItems)); // Додаємо у HTML розмітку

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
