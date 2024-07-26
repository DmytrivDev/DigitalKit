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
  };