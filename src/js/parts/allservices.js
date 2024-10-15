import Splide from '@splidejs/splide';

export const allservices = () => {
  const servicesList = document.querySelector('.allservices__list');

  if (servicesList) {
    servicesList.addEventListener('mouseover', evt => {
      const target = evt.target;

      if (target.tagName === 'BUTTON') {
        changeState(target);
      }
    });

    servicesList.addEventListener('mouseleave', evt => {
      console.log('111');
      removeShowed();
      document.querySelector('.nullTrans')?.classList.remove('nullTrans');
      document.querySelector('.anim2')?.classList.remove('anim2');
      document.querySelector('.anim3')?.classList.remove('anim3');
    });
  }

  const carousell = document.querySelector('.allservices__carousell');

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

function changeState(target) {
  const id = target.dataset.id;
  const targetElement = document.querySelector(
    '[data-id="allservices_' + id + '"]'
  );
  const targetElementImg = document.querySelector('#allservicesimg_' + id);
  const list = document.querySelector('.allservices__icons');
  const zeroImg = document.querySelector('#allservicesimg_0');

  list.classList.add('nullTrans');
  setTimeout(() => {
    list.classList.remove('nullTrans');
    setTimeout(() => {
      targetElement.classList.add('showed');
      targetElementImg.classList.add('showed');
      zeroImg.classList.add('anim' + id);
    }, 10);
  }, 100);

  target.addEventListener('mouseleave', evt => {
    targetElement.classList.remove('showed');
    targetElementImg.classList.remove('showed');
    zeroImg.classList.remove('anim' + id);
    setTimeout(() => {
      targetElement.classList.remove('showed');
      targetElementImg.classList.remove('showed');
      zeroImg.classList.remove('anim' + id);
    }, 100);
  });
}

function removeShowed() {
  setTimeout(() => {
    document.querySelectorAll('.section__allservices .showed')?.forEach(el => {
      el.classList.remove('showed');
    });
    document.getElementById('allservicesimg_0')?.removeAttribute('class');
  }, 100);
}

function checkWidth(carousell, splide) {
  const ww = window.innerWidth;
  const carList = carousell.querySelector('.allservices__textlist');

  if (ww < 761) {
    carList.classList.add('splide__list');
    splide.mount();
  } else {
    carList.classList.remove('splide__list');
    splide.destroy();
  }
}
