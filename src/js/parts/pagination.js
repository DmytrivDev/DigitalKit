document.addEventListener('DOMContentLoaded', function () {
  const pagination = document.querySelector('.pagination');
  const perPage = parseInt(pagination.getAttribute('data-perpage'));
  const inner = pagination.querySelector('.inner');
  const totalPagesSpan = pagination.querySelector('.total-pages');
  const prevBtn = pagination.querySelector('.prev');
  const nextBtn = pagination.querySelector('.next');

  // Генеруємо HTML для сторінок
  function renderPages(currentPage, totalPages) {
    totalPagesSpan.textContent = totalPages;
    inner.innerHTML = ''; // Очищаємо попередні елементи
    for (let i = 1; i <= totalPages; i++) {
      const pageSpan = document.createElement('span');
      pageSpan.textContent = i;
      if (i === currentPage) {
        pageSpan.classList.add('active');
      }
      inner.appendChild(pageSpan);
    }
  }

  // Оновлюємо стан кнопок prev/next
  function updateButtons(currentPage, totalPages) {
    if (currentPage === 1) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }

    if (currentPage === totalPages) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }

  // Перемикаємо сторінки з анімацією
  function setCurrentPage(page) {
    const totalCount = document.querySelectorAll(
      '.allcases__item.filtered'
    ).length;
    const totalPages = Math.ceil(totalCount / perPage);

    const currentPage = Math.max(1, Math.min(page, totalPages)); // Обмежуємо між 1 і totalPages
    const previousPage = parseInt(inner.getAttribute('data-current'));

    inner.setAttribute('data-current', currentPage);

    // Оновлюємо сторінки
    renderPages(currentPage, totalPages);
    updateButtons(currentPage, totalPages);

    // Визначаємо напрямок анімації (вперед чи назад)
    const direction = currentPage > previousPage ? 1 : -1; // 1 - вперед, -1 - назад

    // Змінюємо translateY для плавної анімації
    const offset = -((currentPage - 1) * 3); // Відстань зміщення (3rem * індекс сторінки)
    inner.style.transition = 'transform 0.5s ease-in-out'; // Плавність анімації
    inner.style.transform = `translateY(${offset + direction * -0.5}rem)`; // Піднімаємо трохи вище

    // Після короткої затримки плавно опускаємо на нову позицію
    setTimeout(() => {
      inner.style.transform = `translateY(${offset}rem)`; // Остаточне положення сторінки
    }, 500);

    changeItemsByPage(currentPage, previousPage);
  }

  // Обробники подій для кнопок "prev" і "next"
  prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const currentPage = parseInt(inner.getAttribute('data-current'));
    if (
      !e.target.classList.contains('disabled') &&
      !pagination.classList.contains('running')
    ) {
      setCurrentPage(currentPage - 1);
    }
  });

  nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const currentPage = parseInt(inner.getAttribute('data-current'));
    if (
      !e.target.classList.contains('disabled') &&
      !pagination.classList.contains('running')
    ) {
      setCurrentPage(currentPage + 1);
    }
  });

  function distributeItems() {
    const list = document.querySelector('.allcases__list');
    const pages = parseInt(list.getAttribute('data-pages'));
    const items = document.querySelectorAll('.allcases__item.filtered');
    const perPage = parseInt(pagination.getAttribute('data-perpage'));
    let page = 1;
    let numOnPage = 1;

    items.forEach((item, index) => {
      // Визначаємо номер сторінки для кожного айтему
      page = Math.floor(index / perPage) + 1;

      // Нумерація айтемів на кожній сторінці починається з 1
      numOnPage = index % perPage;

      // Додаємо атрибути data-page і data-num
      list.style.height = `calc(${pages} * 5rem)`;
      item.setAttribute('data-page', page);
      item.setAttribute('data-num', numOnPage);

      if (page === 1) {
        item.classList.add('current');
      }
    });
  }

  // Ініціалізація першої сторінки
  setCurrentPage(1);
  distributeItems();

  const buttons = document.querySelectorAll('.allcases__ctrls button');
  const items = document.querySelectorAll('.allcases__item');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const selectedId = this.getAttribute('data-id');

      // 1. Додаємо клас active до натиснутої кнопки та видаляємо з інших
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // 2. Додаємо клас filtered до елементів allcases__item з відповідним data-ids
      items.forEach(item => {
        const dataIds = item
          .getAttribute('data-ids')
          .split(',')
          .map(id => id.trim());

        if (dataIds.includes(selectedId)) {
          item.classList.add('filtered');
        } else {
          item.classList.remove('filtered');
        }
      });

      document.querySelectorAll('.allcases__item')?.forEach(el => {
        el.classList.remove('current');
      });

      setCurrentPage(1);
      distributeItems();
    });
  });
});

function changeItemsByPage(currentPage, previousPage) {
  // Якщо попередня сторінка менша, додаємо клас по порядку
  const pag = document.querySelector('.pagination');
  const cont = document.querySelector('.allcases__cont');

  if (previousPage < currentPage) {
    const items = document.querySelectorAll(
      `.allcases__item.filtered[data-page="${currentPage}"]`
    );

    pag.classList.add('running');
    cont.classList.add('running');
    items.forEach((item, index) => {
      item.classList.add('pre-current');
      setTimeout(() => {
        item.classList.add('current');
      }, 750);
      setTimeout(() => {
        item.classList.remove('pre-current');
      }, 1250);
    });

    setTimeout(() => {
      pag.classList.remove('running');
      cont.classList.remove('running');
    }, 1250);
  }

  // Якщо попередня сторінка більша, видаляємо клас в зворотньому порядку
  if (previousPage > currentPage) {
    const items = document.querySelectorAll(
      `.allcases__item.filtered[data-page="${previousPage}"]`
    );

    pag.classList.add('running');
    cont.classList.add('running');
    items.forEach((item, index) => {
      item.classList.remove('current');
    });

    setTimeout(() => {
      pag.classList.remove('running');
      cont.classList.remove('running');
    }, 750);
  }
}
