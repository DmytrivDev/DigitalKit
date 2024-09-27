export const pointer = () => {
  const courField = document.querySelectorAll('.coursorField');

  courField?.forEach(el => {
    const coursor = el.nextElementSibling;

    el.addEventListener('mousemove', e => {
      moveCursor(e, coursor);
    });
  });
};

const moveCursor = (e, coursor) => {
  const target = e.currentTarget;
  const viewportOffset = target.getBoundingClientRect();
  const top = viewportOffset.top;
  const left = viewportOffset.left;
  const mouseY = e.clientY - top;
  const mouseX = e.clientX - left;

  coursor.style.top = `${mouseY}px`;
  coursor.style.left = `${mouseX}px`;

  if (target.classList.contains('allcases')) {
    alcasesFunc(target);
    windowMove();
  }
};

function alcasesFunc(target) {
  const tag = target.dataset.tag ? target.dataset.tag : 'Empty';
  const color = target.dataset.color ? target.dataset.color : '#C7DDED';
  const img = target.dataset.img
    ? target.dataset.img
    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/CfCQAGBgICjIkPvgAAAABJRU5ErkJggg==';
  const allCont = document.querySelector('.allcases__window');

  if (allCont) {
    const tagPl = allCont.querySelector('.allcases__tag');
    const imgPl = allCont.querySelector('img');

    allCont.style.backgroundColor = color;
    tagPl.innerHTML = tag;
    imgPl.src = img;
  }
}

function windowMove() {
  const container = document.querySelector('.allcases__cont');
  const windowElement = document.querySelector('.allcases__window');

  const containerHeight = container.offsetHeight;
  const windowHeight = windowElement.offsetHeight;

  container.addEventListener('mousemove', event => {
    const containerRect = container.getBoundingClientRect();
    const mouseY = event.clientY - containerRect.top;

    let newTop = mouseY - windowHeight / 2;

    if (newTop < -10) {
      newTop = -10;
    } else if (newTop > containerHeight - windowHeight + 20) {
      newTop = containerHeight - windowHeight + 20;
    }

    windowElement.style.top = `${newTop}px`;
  });
}
