export const header = () => {
  const burger = document.querySelector('.header__burger');
  const header = document.querySelector('.header');

  burger.addEventListener('click', openNav);

  const logoCont = document.querySelector('.logo__cont');
  if (window.scrollY > 50) {
    logoCont.classList.add('scroled');
    header.classList.add('changed');
  } else {
    logoCont.classList.remove('scroled');
    header.classList.remove('changed');
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      logoCont.classList.add('scroled');
      header.classList.add('changed');
    } else {
      logoCont.classList.remove('scroled');
      header.classList.remove('changed');
    }
  });

  document.querySelector('.openNavDesc')?.addEventListener('click', evt => {
    header.classList.add('openedNavAll');
  });
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
