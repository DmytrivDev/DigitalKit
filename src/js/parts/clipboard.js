const copyBtns = document.querySelectorAll('.clipboard');

copyBtns?.forEach(btn => {
  // Створюємо властивість для зберігання таймера в кожному елементі
  btn.timer = null;

  btn.addEventListener('click', () => {
    const idCopy = btn.dataset.id;

    if (idCopy) {
      const link = document.getElementById(idCopy);
      if (link) {
        const linkText = link.textContent;

        navigator.clipboard
          .writeText(linkText)
          .then(() => {
            btn.classList.add('isCopy');

            // Перезапускаємо таймер, якщо є попередній
            if (btn.timer) {
              clearTimeout(btn.timer);
            }

            // Таймер на 1 секунди для зняття класу
            btn.timer = setTimeout(() => {
              btn.classList.remove('isCopy');
              btn.timer = null;
            }, 1000);
          })
          .catch(err => {
            console.error('Помилка при копіюванні: ', err);
          });
      }
    }
  });
});
