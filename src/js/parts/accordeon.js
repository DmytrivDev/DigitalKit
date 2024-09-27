import Accordion from 'accordion-js';

export const galCar = () => {
  const accordeon = document.querySelectorAll('.accordeon__list');

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
};
