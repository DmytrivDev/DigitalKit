document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('.error__preloader span');
  const totalAnimationDuration = 7;

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
      const offsetX = (event.clientX - centerX) / 100;
      const offsetY = (event.clientY - centerY) / 100;

      message.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}
