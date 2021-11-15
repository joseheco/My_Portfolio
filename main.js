const projects = [
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    images: './images/laptop_1.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/joseheco',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    images: './images/laptop_2.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/joseheco',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    images: './images/laptop_3.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/joseheco',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    images: './images/laptop_4.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/joseheco',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    images: './images/laptop_5.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/josehco',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    images: './images/laptop_6.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/joseheco',
  },
];

let num = projects.length;
const main = document.querySelector('#project-title');

function createProjects(cards) {
  const card = document.createElement('section');
  card.className = `project-${num}`;
  num += 1;
  const img = document.createElement('img');
  img.className = 'lap-images';
  img.srcset = cards.images;
  card.appendChild(img);
  const sectionTag = document.createElement('div');
  sectionTag.className = 'project-1';
  card.appendChild(sectionTag);
  const h3Tag = document.createElement('h3');
  h3Tag.textContent = cards.name;
  sectionTag.appendChild(h3Tag);
  const ulTag = document.createElement('ul');
  ulTag.className = 'flex';
  sectionTag.appendChild(ulTag);
  cards.languages.forEach((value) => {
    const items = document.createElement('li');
    items.textContent = value;
    ulTag.appendChild(items);
  });
  const buttProject = document.createElement('button');
  buttProject.type = 'button';
  buttProject.className = 'button-project';
  buttProject.textContent = 'See this project →';
  buttProject.setAttribute('onclick', `openPopup(projects[${projects.indexOf(cards)}])`);
  sectionTag.appendChild(buttProject);

  main.insertAdjacentElement('afterend', card);
}

const modalOpen = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-closer');

function openPopup(cards) {
  modalOpen.classList.replace('hidden', 'show_popup');
  const image = document.querySelector('.modal-img');
  const description = document.querySelector('.modal-description');
  const languages = document.querySelector('.modal-tech');
  const sourcelink = document.querySelector('#modal-source');

  image.srcset = cards.images;
  description.textContent = cards.description;
  sourcelink.setAttribute('href', cards.source);

  cards.languages.forEach((value) => {
    const items = document.createElement('li');
    items.className = 'skill';
    items.textContent = value;
    languages.appendChild(items);
  });
}

function closePopup() {
  modalOpen.classList.replace('show_popup', 'hidden');
  const languages = document.querySelector('.modal-tech');
  while (languages.firstChild) {
    languages.removeChild(languages.firstChild);
  }
}

modalClose.addEventListener('click', closePopup);
projects.reverse().forEach((cards) => createProjects(cards));
