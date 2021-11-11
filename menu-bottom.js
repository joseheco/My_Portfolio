const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
mainMenu.addEventListener('click', close);


function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%'
}

const popUp = document.querySelector('.popup');
const openModal = document.querySelector('.button-project');
const closeModal = document.querySelector('.closePop');
const overlay = document.querySelector('#overlay');

openModal.addEventListener('click', showPop);
closeModal.addEventListener('click', closePop);

