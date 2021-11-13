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

const form = document.querySelector('.contact-form');
const email = document.getElementById('emailForm');
const error = document.querySelector('.errorMail');
const regExp = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;

form.addEventListener('submit', (event) => {
  if (regExp.test(email.value)) {
    error.innerHTML = '';
  } else {
    event.preventDefault();
    error.innerHTML = 'Your email address is not valid';
    error.style.bottom = '';
  }
});

const inputName = document.getElementById('nameForm');
const inputEmail = document.getElementById('emailForm');
const inputMessage = document.getElementById('commentForm');

function catchValue() {
  const saveInfo = JSON.stringify({
    name: inputName.value.trim(),
    email: inputEmail.value.trim(),
    comment: inputMessage.value.trim(),
  });
  localStorage.setItem('storeInfo', saveInfo);
}

function enterData() {
  const storeData = JSON.parse(localStorage.getItem('storeInfo'));
  inputName.value = storeData.name;
  inputEmail.value = storeData.email;
  inputMessage.value = storeData.comment;
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (messa) {
    return messa instanceof DOMException;
  }
}

if (storageAvailable('localStorage')) {
  form.addEventListener('change', catchValue);
  window.onload = enterData();
} else {
  //  no data
}
