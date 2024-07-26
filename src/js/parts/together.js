export const together = () => {
  const section = document.querySelector('.section__together');

  if (section) {
    document.addEventListener('scroll', function () {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0) {
        section.classList.remove('white');
      } else {
        section.classList.add('white');
      }
    });
  }
};
