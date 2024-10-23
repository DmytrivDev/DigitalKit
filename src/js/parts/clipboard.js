const copyBtns = document.querySelectorAll('.clipboard');

copyBtns?.forEach(btn => {
  btn.addEventListener('click', () => {
    const idCopy = btn.dataset.id;

    if (idCopy) {
      const link = document.getElementById(idCopy);
      const contactBox = btn.closest('.contact__cont');

      if (link) {
        const linkText = link.querySelector('span:first-child').textContent.trim();

        navigator.clipboard
          .writeText(linkText)
          .then(() => {
            if (!contactBox.timer) {
              contactBox.timer = null;
            }

            contactBox.classList.add('isCopy');

            if (contactBox.timer) {
              clearTimeout(contactBox.timer);
            }

            contactBox.timer = setTimeout(() => {
              contactBox.classList.remove('isCopy');
              contactBox.timer = null;
            }, 1000);
          })
          .catch(err => {
            console.error('Помилка при копіюванні: ', err);
          });
      }
    }
  });
});
