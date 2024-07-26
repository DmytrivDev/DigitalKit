export const header = () => {
    const burger = document.querySelector('.header__burger');

    burger.addEventListener('click', openNav);
};

const openNav = evt => {
    evt.preventDefault();

    const target = evt.currentTarget;
    const navigation = document.querySelector('.navigation');

    target.classList.remove('noAct');
    navigation.classList.remove('noAct');
    target.classList.toggle('opened');
    navigation.classList.toggle('opened');
    document.querySelector('body').classList.add('overHideMob');
}