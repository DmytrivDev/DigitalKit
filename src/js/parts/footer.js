export const toTop = () => {
  const toTopButton = document.querySelector('.totop');

  if (toTopButton) {
      toTopButton.addEventListener('click', function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }
};
