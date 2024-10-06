export const together = () => {
  const body = document.querySelector('body');
  const section = document.querySelector('.section__together');
  let ww = window.innerHeight / 4;

  if (section) {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 0) {
      body.classList.add('red');
    } else {
      body.classList.remove('red');
    }

    window.addEventListener('resize', () => {
      ww = window.innerHeight / 4;

      const rect2 = section.getBoundingClientRect();
      if (rect2.top - ww <= 0) {
        body.classList.add('red');
      } else {
        body.classList.remove('red');
      }
    });

    window.addEventListener('scroll', function () {
      const rect2 = section.getBoundingClientRect();
      if (rect2.top - ww <= 0) {
        body.classList.add('red');
      } else {
        body.classList.remove('red');
      }
    });
  }
};
