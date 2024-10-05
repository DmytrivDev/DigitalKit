import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const articles = () => {
  const related = document.querySelector('.articles__carousell');
  if (related) {
    const options = {
      isNavigation: true,
      perPage: 3,
      perMove: 1,
      pagination: false,
      gap: '1rem',
      breakpoints: {
        960: {
          perPage: 2,
        },
        670: {
          perPage: 1,
          gap: '0.75rem',
        },
      },
    };

    new Splide(related, options).mount();
  }
};
