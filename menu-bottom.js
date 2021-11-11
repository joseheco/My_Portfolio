const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
mainMenu.addEventListener('click', close);

const popUp = document.querySelector('.popup');
const openModal = document.querySelector('.button-project');
const closeModal = document.querySelector('.closePop');
const overlay = document.querySelector('#overlay');

function showPop() {
  popUp.style.display = 'flex';
  popUp.style.top = '0';
  overlay.classList.add('active');
}

function closePop() {
  popUp.style.top = '-150%';
  overlay.classList.remove('active');
}

openModal.addEventListener('click', showPop);
closeModal.addEventListener('click', closePop);
