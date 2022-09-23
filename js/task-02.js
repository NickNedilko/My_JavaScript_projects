const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newLiEl = ingredients.map(element => {
  const  liEl = document.createElement('li');
  liEl.classList.add('item')
  liEl.textContent = element;
  return liEl
})
const UlEl = document.querySelector('#ingredients');
UlEl.append(...newLiEl);



