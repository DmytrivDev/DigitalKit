const articleСont = document.querySelector('.article__cont');
const stickyElement = document.querySelector('.article__soc.soc-desc');

if (stickyElement) {
  checkSticky();

  window.addEventListener('scroll', checkSticky);
  window.addEventListener('resize', checkSticky);
}

function checkSticky() {
  const offsetTop = articleСont.offsetTop;
  const remToPx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const offsetInPx = 8 * remToPx; // Конвертуємо 8.5rem у пікселі
  const offsetInHead = 10.5 * remToPx;

  const scrollY = window.scrollY || window.pageYOffset; // Поточна позиція скролу
  const finBor = offsetTop + offsetInHead - offsetInPx;

  // Перевіряємо, чи сторінка прокручена більше ніж 100px і чи скрол перевищує початкову позицію стікі-елемента
  if (scrollY >= finBor) {
    stickyElement.classList.add('sticky');
  } else {
    if (stickyElement.classList.contains('sticky')) {
      stickyElement.classList.add('stickyEnd');

      setTimeout(() => {
        stickyElement.classList.remove('stickyEnd');
      }, 400);
    }

    stickyElement.classList.remove('sticky');
  }
}
