export const header = () => {
  const burger = document.querySelector('.header__burger');

  burger.addEventListener('click', openNav);

  const logoCont = document.querySelector('.logo__cont');
  if (window.scrollY > 50) {
    logoCont.classList.add('scroled');
  } else {
    logoCont.classList.remove('scroled');
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      logoCont.classList.add('scroled');
    } else {
      logoCont.classList.remove('scroled');
    }
  });

  const header = document.querySelector('.header');
  const changeHeaderBlocks = document.querySelectorAll('.changeHeader');

  function checkChangeHeader() {
    let isAnyBlockVisible = false;

    changeHeaderBlocks.forEach(el => {
      const rect = el.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= 0) {
        isAnyBlockVisible = true;
      }
    });

    if (isAnyBlockVisible) {
      header.classList.add('changed');
    } else {
      header.classList.remove('changed');
    }
  }

  window.addEventListener('scroll', checkChangeHeader);

  checkChangeHeader();
};

const openNav = evt => {
  evt.preventDefault();

  const target = evt.currentTarget;
  const navigation = document.querySelector('.navigation');

  target.classList.remove('noAct');
  navigation.classList.remove('noAct');
  target.classList.toggle('opened');
  navigation.classList.toggle('opened');
  document.querySelector('body').classList.toggle('overHideMob');
};
