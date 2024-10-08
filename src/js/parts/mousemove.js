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
