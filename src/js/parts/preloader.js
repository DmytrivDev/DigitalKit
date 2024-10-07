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
let mouseStopTimeout;

if (messages) {
  document.addEventListener('mousemove', event => {
    const currentMousePosition = { x: event.clientX, y: event.clientY };

    // Если мышка двигается, сбрасываем таймер
    if (mouseStopTimeout) {
      clearTimeout(mouseStopTimeout);
    }

    // Устанавливаем новый таймер на 100ms после остановки мышки
    mouseStopTimeout = setTimeout(() => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      messages.forEach((message, index) => {
        // Рандомно определяем положительное или отрицательное значение
        const offsetXDirection = Math.random() < 0.5 ? 1 : -1;
        const offsetYDirection = Math.random() < 0.5 ? 1 : -1;

        // Определяем смещение с учетом направления
        const offsetX =
          ((currentMousePosition.x - centerX) / 40) * offsetXDirection + 10;
        const offsetY =
          ((currentMousePosition.y - centerY) / 40) * offsetYDirection + 10;

        const animationDuration = Math.random() * 2 + 1; // Время от 1 до 3 секунд

        // message.style.transition = `transform ${animationDuration}s ease-out`;
        message.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    }, 100); // Задержка перед запуском анимации после остановки мышки
  });
}
