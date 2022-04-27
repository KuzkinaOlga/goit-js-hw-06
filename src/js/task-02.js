const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector(`#ingredients`);
console.log(ul);
const elements = ingredients.map(ingredient => {
  const listsEl  = document.createElement(`li`);
listsEl.classList.add(`item`)
  listsEl.textContent = ingredient;
  return listsEl;
})

console.log(...elements);
ul.append(...elements);
