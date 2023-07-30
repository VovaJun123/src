// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const item = document.querySelectorAll(".item");
// console.log(item.children);
// alert(document.getElementById('.item').childNodes.length);
// item.forEach((categories) => {
//   console.log(categories.dataset.id);
// });


const categoriesEl = document.getElementById('categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);

const arrayTitlesCategoriesRef = document.querySelectorAll('h2');
arrayTitlesCategoriesRef.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});