import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const reviews = () => {
  const reviews = document.querySelector('.reviews__carousell');
  if (reviews) {
    const options = {
      perPage: 2,
      perMove: 1,
      gap: 0,
      drag: false,
      speed: 600,
      rewindSpeed: 600,
      focus: 0,
      updateOnMove: true,
      breakpoints: {
        960: {
          perPage: 1,
          drag: true,
        },
      },
    };

    const splide = new Splide(reviews, options).mount();

    splide.on('move', function () {
      console.log('111');
      const slides = reviews.querySelectorAll('.splide__slide');

      const prevSlide = document.querySelector('.splide__slide.is-prev');

      if (prevSlide) {
        const prevIndex = Array.from(slides).indexOf(prevSlide);

        slides.forEach((slide, index) => {
          if (index < prevIndex) {
            slide.classList.add('duble-prev');
          } else {
            slide.classList.remove('duble-prev');
          }
        });
      } else {
        slides.forEach((slide) => {
          slide.classList.remove('duble-prev');
        });
      }
    });
  }
};
