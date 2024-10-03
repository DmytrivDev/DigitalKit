const copyBtns = document.querySelectorAll('.clipboard');

copyBtns.forEach(btn => {
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
          })
          .catch(err => {
            console.error('Ошибка при копировании: ', err);
          });
      }
    }
  });
});
