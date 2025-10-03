import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImage } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  btnLoad,
} from './js/render-functions';

document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.querySelector('.form');

  const params = {
    query: '',
    page: 1,
    pageSize: 15,
    totalResults: 0,
  };

  searchForm.addEventListener('submit', searchFormEvt);

  async function searchFormEvt(e) {
    clearGallery();
    params.page = 1;
    e.preventDefault();
    const form = e.target;
    params.query = form.elements.query.value.trim();
    if (params.query === '') {
      iziToast.error({
        backgroundColor: '#EF4040',
        message: 'Please fill the form',
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#B51B1B',
      });
      return;
    }

    try {
      const data = await searchImage(params);

      params.totalResults = data.totalHits;

      params.maxPage = Math.ceil(params.totalResults / params.pageSize);

      if (data.hits.length === 0) {
        iziToast.error({
          backgroundColor: '#EF4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          titleColor: '#fff',
          messageColor: '#fff',
          progressBarColor: '#B51B1B',
        });
        hideLoader();
        hideLoadMore();
        return;
      } else {
        showLoader();
        createGallery(data.hits);
      }

      if (data.hits.length >= 15) {
        showLoadMore();
      } else {
        hideLoadMore();
      }
    } catch (error) {
      console.log(error);
      iziToast.error({
        backgroundColor: '#EF4040',
        message: 'Sorry, something goes wrong. Please, try again later!',
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#B51B1B',
      });
    } finally {
      hideLoader();
    }

    form.reset();
  }

  btnLoad.addEventListener('click', handleLoadMore);

  async function handleLoadMore() {
    params.page += 1;

    showLoader();
    hideLoadMore();

    try {
      const data = await searchImage(params);
      createGallery(data.hits);

      const galleryItem = document.querySelector('.img-wrap');
      const galleryItemHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({ top: galleryItemHeight * 2, behavior: 'smooth' });
    } catch (error) {
      console.log(error);
      iziToast.error({
        backgroundColor: '#EF4040',
        message: 'Sorry, something goes wrong. Please, try again later!',
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#B51B1B',
      });
    } finally {
      hideLoader();
      showLoadMore();
    }

    if (params.page === params.maxPage) {
      hideLoadMore();
      iziToast.error({
        backgroundColor: '#EF4040',
        message: "We're sorry, but you've reached the end of search results.",
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#B51B1B',
      });
      btnLoad.removeEventListener('click', handleLoadMore);
    }
  }
});