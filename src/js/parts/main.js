export const main = () => {
  const mainBg = document.querySelector('.main__bg.bottom');
  const mainBgT = document.querySelector('.main__bg.top');

  if (mainBg) {
    let dots = '';
    let dotsT = '';

    for (let i = 0; i < 1000; i++) {
      dots += '<span class="boxes d'+i+'"><span class="circle"></span></span>';
      dotsT += '<span class="boxes" data-id="d'+i+'"></span>';
    }

    mainBgT.innerHTML = dotsT;
    mainBg.innerHTML = dots;

    let mouseX;
    let mouseY;
    let scrolled;

    mainBgT.querySelectorAll('.boxes').forEach(function (box) {
      box.addEventListener('mouseenter', function (e) {
        const id = e.target.dataset.id;
        e = e || window.event;
        mouseX = e.pageX || e.clientX + document.body.scrollLeft;
        mouseY = e.pageY || e.clientY + document.body.scrollTop;
        scrolled = window.scrollY;

        let circle = mainBg.querySelector('.'+id+' .circle');
        if (circle) {
          circle.style.transition = 'all 0.0s ease-in-out';
          circle.style.backgroundColor  = '#FF5941';
          circle.style.width = '0.6rem';
          circle.style.height = '0.6rem';
        }
      });

      box.addEventListener('mouseout', function (e) {
        const id = e.target.dataset.id;
        let circle = mainBg.querySelector('.'+id+' .circle');
        if (circle) {
          circle.style.transition = 'all 0.5s ease-in-out';
          circle.style.width = '0.375rem';
          circle.style.height = '0.375rem';
          circle.style.backgroundColor  = '#F1F1F1';
        }
      });
    });
  }
};
