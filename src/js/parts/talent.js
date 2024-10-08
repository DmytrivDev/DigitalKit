export const talent = () => {
  const section = document.querySelector('.section__talent');

  if (section) {
    const title = document.querySelector('.talent__title');
    const letters = title.textContent.split(''); // Розбиваємо текст на букви
    title.innerHTML = letters.map(letter => `<span>${letter}</span>`).join(''); // Обгортаємо кожну букву в <span>

    const spans = document.querySelectorAll('.talent__title span');

    window.addEventListener('scroll', () => {
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Обчислюємо прогрес скролу: 0 коли верх секції торкається верхнього краю екрану,
      // і 1 коли низ секції торкається нижнього краю екрану
      const progress = Math.min(
        Math.max(
          (windowHeight - sectionRect.bottom + 50) /
            (windowHeight - sectionRect.height),
          0
        ),
        1
      );

      // Кількість букв для замальовування
      const lettersToPaint = Math.floor(progress * spans.length);

      // Замальовуємо відповідну кількість букв
      spans.forEach((span, index) => {
        if (index >= (spans.length - lettersToPaint)) {
          span.style.color = '#CDCDCD'; // Замальовуємо в чорний
        } else {
          span.style.color = '#191919'; // Повертаємо в сірий
        }
      });
    });
  }
};
