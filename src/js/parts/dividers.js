export const dividers = () => {
  const dividerCont = document.querySelectorAll('.dividers');

  if (dividerCont) {
    document.addEventListener('scroll', function () {
      dividerCont?.forEach(el => {
        const containerRect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const pixelMark = 400;

        if (containerRect.top >= viewportHeight) {
          setTransform(el, 0);
        } else if (
          containerRect.top <= viewportHeight
        ) {
          const scrolledPixels = viewportHeight - containerRect.top;
          let percent = (scrolledPixels / pixelMark) * 100;

          if (percent === 100 || percent > 100) {
            el.classList.add('startAnim');
          } else {
            el.classList.remove('startAnim');
          }

          if (percent > 100) {
            percent = 100;
          } else if (percent < 0) {
            percent = 0;
          }

          setTransform(el, percent);
        }
      });
    });
  }
};

function setTransform(dividersCont, value) {
  const dividers = dividersCont?.querySelectorAll('.hr');

  dividers?.forEach(el => {
    el.style.width = `${value}%`;
  });
}
