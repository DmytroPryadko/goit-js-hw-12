import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export const btnLoad = document.querySelector('.js-load-more');

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image =>
        `<li class="img-wrap">
        <a href="${image.largeImageURL}">
          <img
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>
        <div class="gallery-info-wrapper">
          <div class="info-likes">
            <p class="title">Likes</p>
            <p class="subtitle">${image.likes}</p>
          </div>
          <div class="info-views">
            <p class="title">Views</p>
            <p class="subtitle">${image.views}</p>
          </div>
          <div class="info-comments">
            <p class="title">Comments</p>
            <p class="subtitle">${image.comments}</p>
          </div>
          <div class="info-downloads">
            <p class="title">Downloads</p>
            <p class="subtitle">${image.downloads}</p>
          </div>
        </div>
      </li>
          `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    overlayOpacity: 0.8,
  }).refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader-wrapp');
  loader.classList.remove('hide');
}

export function hideLoader() {
  const loader = document.querySelector('.loader-wrapp');
  loader.classList.add('hide');
}

export function showLoadMore() {
  btnLoad.classList.remove('hide');
}

export function hideLoadMore() {
  btnLoad.classList.add('hide');
}