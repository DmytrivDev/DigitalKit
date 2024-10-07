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
    const currentMousePosition = { x: event.clientX, y: event.clientY };

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    messages.forEach(message => {
      let offsetX = (currentMousePosition.x - centerX) / 20;
      let offsetY = (currentMousePosition.y - centerY) / 20;

      if (message.classList.contains('type1')) {
        offsetX = -(currentMousePosition.x - centerX) / 20;
        offsetY = -(currentMousePosition.y - centerY) / 20;
      }

      message.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}
