 export const tabs = () => {
    const tabsCont = document.querySelector('.tabs__ctrllist');

    tabsCont.addEventListener('click', (evt) => {
        const target = evt.target;
        const isTarget = target.classList.contains('tabBtn')

        if(isTarget) {
            const data = target.dataset.tab;
            const tab = document.getElementById(data);

            tabsCont.querySelector('.active').classList.remove('active');
            target.classList.add('active');
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
        }
    })
 }