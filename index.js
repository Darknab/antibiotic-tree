const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    if (document.querySelector(`.sub-${element.id}`)) {
      document.querySelector(`.sub-${element.id}`).classList.remove('hidden');
      document.querySelector(`.sub-${element.id}`).classList.add('animate');
    }
  })
})
