const btnToggleItems = [...document.querySelectorAll('.get-started-list .toggle-btn')];
const serviceList = [...document.querySelectorAll('.get-started-list .btn-service')];
const billList = document.querySelector('.bill__list');
const billHead = document.querySelector('.bill__head');
const billTotal = document.querySelector('.bill__total');
const billNotification = document.querySelector('.bill__notification');
const btnModalToggle = document.querySelector('.btn-get-started');
const billTotalPrice = document.querySelector('.bill__total-price');
const getStartedSection = document.querySelector('.main__get-started');
// const modalOverlay = document.querySelector('.modal-overlay');

// Contact modal
const contactModal = document.querySelector('.contact-modal');
const contactModalBody = contactModal.querySelector('.services-choosed');
const billSelected = getStartedSection.querySelector('.bill__list');
// const buttonsModal = contactModal.querySelectorAll('.btn:not([type=submit]');
const contactFormChoosed = contactModal.querySelector('.contact-form .contact-form__choosed');
const contactFormTotal = contactModal.querySelector('.contact-form .contact-form__total');
const btnModalClose = contactModal.querySelector('.btn-modal-close');
const btnModalChange = contactModal.querySelector('.btn-change');

// Works modal
// const workList = document.querySelector('.works-content');
// const intercomChat = document.querySelector('#intercom-container');
// const workModal = document.querySelector('.modal');
// const btnWorkClose = workModal.querySelector('.btn-modal-close');
// const workModalImage = workModal.querySelector('.modal__img');

const render = serviceList => {
    const selectedWorks = serviceList
        .filter(item => item.classList.contains('selected'))
        .map(item => (
            {
                title: item.querySelector('.btn-service__title').innerText,
                price: 99
            }
        ));
    const total = selectedWorks.reduce((sum, curr) => sum + curr.price, 0);
    const hiddenFields = [billHead, billList, billTotal];

    billNotification.classList.remove('hidden');
    btnModalToggle.classList.add('disabled', 'pointer-none');
    hiddenFields.forEach(item => item.classList.add('hidden'));

    if (!selectedWorks.length) return;

    billNotification.classList.add('hidden');
    btnModalToggle.classList.remove('disabled', 'pointer-none');
    hiddenFields.forEach(item => item.classList.remove('hidden'));

    billList.innerHTML = '';
    billTotalPrice.innerText = `$ ${total} / per month`;

    selectedWorks.forEach(item => {
        billList.innerHTML += `
        <li class="bill__item">
            <span class="bill__description">${item.title}</span>
            <span class="bill__amount">$ ${item.price} / per month</span>
        </li>
        `;
    });
};

if (btnToggleItems) {
    btnToggleItems.forEach(item => item.addEventListener('click', e => {
        e.stopPropagation();

        const currItem = e.currentTarget;
        const currItemBtn = currItem.closest ? currItem.closest('.btn-service') : currItem.parentElement;

        e.target.type === 'checkbox'
            ? e.stopPropagation()
            : currItemBtn.classList.toggle('selected');

        render(serviceList);
    }));
}

const toggleModal = () => {
    body.classList.toggle('scroll-state');
    modalOverlay.classList.toggle('closed');
    contactModal.classList.toggle('closed');
};

btnModalToggle.addEventListener('click', () => {
    contactModalBody.innerHTML = billSelected.outerHTML + billTotal.outerHTML;
    contactFormTotal.value = billTotalPrice.innerText;
    contactFormChoosed.value = [...billSelected.querySelectorAll('.bill__description')]
        .map(item => item.innerText)
        .join(' / ');

    toggleModal();
});

[btnModalClose, btnModalChange].forEach(item => item.addEventListener('click', toggleModal));
modalOverlay.addEventListener('click', () => {
    body.classList.remove('scroll-state');
    modalOverlay.classList.add('closed');
    contactModal.classList.add('closed');
    workModal.classList.add('closed');
});
render(serviceList);
