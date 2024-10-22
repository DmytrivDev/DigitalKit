import Accordion from 'accordion-js';

const accordeonCont = document.querySelector('.section__accordeon');

export const galCar = () => {
  const accordeon = document.querySelectorAll('.accordeonStart');

  if (accordeon) {
    let accOptions = {
      duration: 300,
    };

    let $index = 0;
    accordeon.forEach(el => {
      if ($index === 0) {
        accOptions.openOnInit = [0];
      } else {
        delete accOptions.openOnInit;
      }
      new Accordion(el, accOptions);
      $index++;
    });
  }

  if (accordeonCont) {
    checkAccordeonVisibility();
    window.addEventListener('scroll', checkAccordeonVisibility);
    window.addEventListener('resize', checkAccordeonVisibility);
  }
};

function checkAccordeonVisibility() {
  const rect = accordeonCont.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const accH = document.querySelector('.accordeonStart .is-active').offsetHeight + windowHeight * .15;
  if (rect.top < windowHeight - accH) {
    accordeonCont.classList.add('done'); // Додаємо клас якщо елемент видно
  } else {
    accordeonCont.classList.remove('done'); // Прибираємо клас якщо елемент виходить з екрану
  }
}
