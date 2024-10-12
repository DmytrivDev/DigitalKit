import Splide from '@splidejs/splide';

export const allcases = (destr) => {
  const carousell = document.querySelector('.allcases__carousell');

  const sliderOptions = {
    perPage: 1,
    perMove: 1,
    gap: '2rem',
    drag: true,
    pagination: false,
    arrows: true,
  };

  if (carousell) {
    const splide = new Splide(carousell, sliderOptions);
    
    checkWidthCases(carousell, splide);

    window.addEventListener('resize', function () {
      checkWidthCases(carousell, splide);
    });
  }
};

function checkWidthCases(carousell, splide) {
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
