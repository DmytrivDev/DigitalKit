export const together = () => {
  const section = document.querySelector('.section__together');

  if (section) {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 0) {
      section.classList.remove('white');
    } else {
      section.classList.add('white');
    }

    document.addEventListener('scroll', function () {
      const rect2 = section.getBoundingClientRect();
      if (rect2.top <= 0) {
        section.classList.remove('white');
      } else {
        section.classList.add('white');
      }
    });
  }
};
