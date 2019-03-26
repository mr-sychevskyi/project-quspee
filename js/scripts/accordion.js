const accordionBtn = [...document.querySelectorAll('.accordion')];

if (accordionBtn) {
    accordionBtn.forEach(item => item.addEventListener('click', e => {
        e.preventDefault();

        const currItem = e.currentTarget;
        const currItemBtn = currItem.querySelector('.btn-accordion');
        const currItemPanel = currItem.querySelector('.accordion-panel');

        if (currItemPanel) {
            currItemBtn.classList.toggle('open');
            currItemPanel.classList.toggle('d-block');
        }
    }));
}
