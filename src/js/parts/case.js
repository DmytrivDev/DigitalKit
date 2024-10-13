const section = document.querySelector('.servises__container');
const listItems = document.querySelectorAll('.servises__list .divid');
const list = document.querySelector('.servises__list');
const title = document.querySelector('.services__title');
const letters = title?.textContent.split('');
let spans = [];

if (section) {
  title.innerHTML = letters.map(letter => `<span>${letter}</span>`).join(''); // Обгортаємо кожну букву в <span>
  spans = document.querySelectorAll('.services__title span');

  caseChecker();
  window.addEventListener('scroll', caseChecker);
}

function caseChecker() {
  const sectionRect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Обчислюємо прогрес скролу: 0 коли верх секції торкається верхнього краю екрану,
  // і 1 коли низ секції торкається нижнього краю екрану
  const progress = Math.min(
    Math.max((windowHeight - sectionRect.top) / sectionRect.height, 0),
    1
  );
  const progressParc = progress * 100;

  // Кількість букв для замальовування
  const lettersToPaint = Math.floor(progress * spans.length);

  if (progressParc >= 100) {
    list.classList.add('doneStart');
    list.classList.add('done');
  } else {
    list.classList.remove('doneStart');
    list.classList.remove('done');
  }

  listItems.forEach((divid, index) => {
    divid.style.width = `${progressParc}%`;
  });

  // Замальовуємо відповідну кількість букв
  spans.forEach((span, index) => {
    if (index >= lettersToPaint) {
      span.style.color = '#CDCDCD'; // Замальовуємо в чорний
    } else {
      span.style.color = '#191919'; // Повертаємо в сірий
    }
  });
}
