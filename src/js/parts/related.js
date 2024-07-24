import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const related = () => {
  const related = document.querySelector('.related__carousell');
  if (related) {
    const options = {
      type: 'slider',
      isNavigation: true,
      perPage: 2,
      perMove: 1,
      pagination: false,
      gap: '1rem',
    };

    new Splide(related, options).mount();
  }
};
