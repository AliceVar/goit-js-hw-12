import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

const PER_PAGE = 15;

let currentQuery = '';
let page = 1;

form.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please enter a search term!',
      position: 'topRight',
    });

    return;
  }

  currentQuery = query;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);
    form.reset();

    const loadedImages = page * PER_PAGE;

    if (loadedImages >= data.totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      return;
    }

    showLoadMoreButton();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });

    console.error(error);
  } finally {
    hideLoader();
  }
}

async function handleLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    const galleryCard = document.querySelector('.gallery-item');

    if (galleryCard) {
      const cardHeight = galleryCard.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    const loadedImages = page * PER_PAGE;

    if (loadedImages >= data.totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      return;
    }

    showLoadMoreButton();
  } catch (error) {
    page -= 1;

    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });

    showLoadMoreButton();
    console.error(error);
  } finally {
    hideLoader();
  }
}