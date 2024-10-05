import Splide from '@splidejs/splide';

export const superSec = () => {
  const carousell = document.querySelector('.super__carousell');

  const sliderOptions = {
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    drag: true,
    pagination: false,
    arrows: true,
  };

  if (carousell) {
    const splide = new Splide(carousell, sliderOptions);
    checkWidth(carousell, splide);

    window.addEventListener('resize', function () {
      checkWidth(carousell, splide);
    });
  }
};

function checkWidth(carousell, splide) {
  const ww = window.innerWidth;
  const carList = carousell.querySelector('.allcases__list');

  if (ww < 761) {
    carList.classList.add('splide__list');
    splide.mount();
  } else {
    carList.classList.remove('splide__list');
    splide.destroy();
  }
}
