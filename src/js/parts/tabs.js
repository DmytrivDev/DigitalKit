export const tabs = () => {
  const tabsCont = document.querySelector('.tabs__ctrllist');

  tabsCont?.addEventListener('click', evt => {
    const target = evt.target;
    const isTarget = target.classList.contains('tabBtn');

    if (isTarget) {
      const data = target.dataset.tab;
      const tab = document.getElementById(data);

      tabsCont.querySelector('.active').classList.remove('active');
      target.classList.add('active');
      document.querySelector('.tab.active').classList.remove('active');
      tab.classList.add('active');
    }
  });

  if (tabsCont) {
    document.addEventListener('scroll', function () {
      const tabsContainer = document.querySelector('.tabs__container');
      const containerRect = tabsContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const pixelMark = 400; // Задана кількість пікселів для відрахунку відсотків

      if (containerRect.top >= viewportHeight) {
        setTransform(0);
      } else if (
        containerRect.top <= viewportHeight &&
        containerRect.bottom >= viewportHeight
      ) {
        const scrolledPixels = viewportHeight - containerRect.top;
        let percent = (scrolledPixels / pixelMark) * 100;

        if (percent > 100) {
          percent = 100;
        } else if (percent < 0) {
          percent = 0;
        }


        const transformValue = (percent / 100) * 10;
        setTransform(transformValue);
      }
    });
  }
};

function setTransform(value) {
  const newVal = value + 90;
  const newValTr = (10 - value) * 0.5;
  const newValSh = value * 20;
  const tabsContainer = document.querySelector('.tabs__continner');
  const tabsShadow = document.querySelector('.tavs__shadow');
  tabsContainer.style.transform = `scale(${newVal}%)`;
  tabsShadow.style.top = `-${newValSh}px`;
}
