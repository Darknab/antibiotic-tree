const librairie = document.querySelector('#librairie');
const outil = document.querySelector('#outil');
const subOutil = document.querySelector('.sub-outil');
const gentamycine = document.querySelector('#gentamycine');
const subGentamycine = document.querySelector('.sub-gentamycine');
const modele = document.querySelector('#modele');
const subModele = document.querySelector('.sub-modele');

const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    if (document.querySelector(`.sub-${element.id}`)) {
      document.querySelector(`.sub-${element.id}`).classList.remove('hidden');
      document.querySelector(`.sub-${element.id}`).classList.add('animate');
    }
  })
})





