import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

import { pointer } from './pointer';

export const related = () => {
  const related = document.querySelector('.related__carousell');
  if (related) {
    const options = {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      pagination: false,
      updateOnMove: true,
      gap: '1rem',
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    };

    const splide = new Splide(related, options);

    // Додаємо подію для виклику функції pointer при перемиканні слайдів
    splide.on('moved', () => {
      pointer(); // Викликаємо pointer на кожному перемиканні
    });

    splide.mount();
  }
};
