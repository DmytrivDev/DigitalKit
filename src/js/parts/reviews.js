import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const reviews = () => {
  const reviews = document.querySelector('.reviews__carousell');
  if (reviews) {
    const options = {
      perPage: 2,
      perMove: 1,
      gap: 0,
      breakpoints: {
        960: {
          perPage: 1,
        },
      }
    };

    new Splide(reviews, options).mount();
  }
};
