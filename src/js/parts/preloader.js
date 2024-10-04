document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('.error__preloader span');
  const totalAnimationDuration = 3.5;

  if (spans) {
    function startAnimation() {
      spans?.forEach(span => {
        span.style.animation = 'none'; // Удаляем анимацию
        void span.offsetWidth; // Принудительно перерисовываем элемент
        span.style.animation = ''; // Возвращаем анимацию
      });
    }

    startAnimation();

    setInterval(startAnimation, totalAnimationDuration * 1000);
  }
});

const messages = document.querySelectorAll('.error__mess .mess');

if (messages) {
  document.addEventListener('mousemove', event => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    messages.forEach((message, index) => {
      const offsetX = (event.clientX - centerX) / 40;
      const offsetY = (event.clientY - centerY) / 40;

      const animationDuration = Math.random() * 2 + 1; // Время от 1 до 3 секунд

      message.style.transition = `transform ${animationDuration}s ease-out`;
      message.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}
