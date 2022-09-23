// const categoriesListEl = document.querySelector('#categories');
// const quantityСategories = categoriesListEl.children;

// console.log(`Number of categories: ${quantityСategories.length}`);

// [...quantityСategories].forEach(item => {
//   console.log('');
//   console.log(`Category: ${item.querySelector('h2').textContent}`);
//   console.log(`Elements: ${item.querySelectorAll('li').length}`);
// });

// ===========================2=======================================
const listEl = document.querySelector('#categories');
const quantityСategories = listEl.children.length;
console.log(`Number of category:`, quantityСategories);

const allLiEl = document.querySelectorAll('li.item')
allLiEl.forEach(element => {
  const category = element.querySelector('h2').textContent;
  const quatity = element.querySelectorAll('li').length;
  console.log('')
  console.log( `Category:`, category);
  console.log( `Elements:`, quatity);
});





