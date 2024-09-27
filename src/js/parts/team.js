import Splide from '@splidejs/splide';

export const team = () => {
  const carousell = document.querySelector('.team__carousell');

  const sliderOptions = {
    type: 'slide',
    perPage: 2,
    perMove: 1,
    gap: '1rem',
    drag: true,
    pagination: false,
    arrows: false,
    breakpoints: {
      640: {
        perPage: 1,
      },
    }
  };

  console.log(carousell)


  if(carousell) {
    const splide = new Splide(carousell, sliderOptions);
    checkWidth(carousell, splide);

    window.addEventListener('resize', function () {
      checkWidth(carousell, splide);
    });
  }
};

function checkWidth(carousell, splide) {
  const ww = window.innerWidth;
  const carList = carousell.querySelector('.team__list');
  
  if (ww < 960) {
    carList.classList.add('splide__list');
    splide.mount();
  } else {
    carList.classList.remove('splide__list');
    splide.destroy();
  }
}
