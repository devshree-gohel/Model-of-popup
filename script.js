const openbtn = document.getElementById('open-btn');
const closebtn = document.getElementById('close-btn');

const popupContainer = document.querySelector('.popupcontainer');

openbtn.addEventListener('click', () => {

    popupContainer.classList.add('.blur');
    popupContainer.style.display = 'flex';

})

closebtn.addEventListener('click', () => {

    popupContainer.classList.remove('.blur');
    popupContainer.style.display = 'none';

})