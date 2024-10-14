export const talent = () => {
  const section = document.querySelector('.section__talent');

  let delay = 0;

  if (section) {
    const title = document.querySelector('.talent__title');
    const letters = title.textContent.split(''); // Розбиваємо текст на букви
    title.innerHTML = letters.map(letter => `<span>${letter}</span>`).join(''); // Обгортаємо кожну букву в <span>

    const spans = document.querySelectorAll('.talent__title span');

    window.addEventListener('scroll', () => {
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (section?.classList.contains('noAnim')) {
        setTimeout(() => {
          delay = 300;
          section.classList.remove('noAnim');
        }, 100);
      }

      // Обчислюємо прогрес скролу: 0 коли верх секції торкається верхнього краю екрану,
      // і 1 коли низ секції торкається нижнього краю екрану
      const progress = Math.min(
        Math.max(
          (windowHeight - sectionRect.bottom + 100) /
            (windowHeight - sectionRect.height),
          0
        ),
        1
      );

      // Кількість букв для замальовування
      const lettersToPaint = Math.floor(progress * spans.length);

      // Замальовуємо відповідну кількість букв
      spans.forEach((span, index) => {
        if (index >= spans.length - lettersToPaint) {
          span.style.color = '#CDCDCD'; // Замальовуємо в чорний
        } else {
          span.style.color = '#191919'; // Повертаємо в сірий
        }
      });

      const parcFin = 100 - progress * 100;

      if (parcFin > 16) {
        addClass('st2');
      } else {
        remClass('st2');
      }

      if (parcFin > 50) {
        addClass('st3');
      } else {
        remClass('st3');
      }

      if (parcFin > 80) {
        addClass('st4');
      } else {
        remClass('st4');
      }
    });
  }

  function addClass(addclass) {
    if (!section.classList.contains(addclass)) {
      section.classList.add('trans');
      setTimeout(() => {
        section.classList.remove('trans');
        section.classList.add(addclass);
      }, delay);
    }
  }

  function remClass(remClass) {
    if (section.classList.contains(remClass)) {
      section.classList.add('transRev');
      setTimeout(() => {
        section.classList.remove('transRev');
        section.classList.remove(remClass);
      }, delay);
    }
  }
};
