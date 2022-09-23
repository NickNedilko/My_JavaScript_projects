const btnIncrement = document.querySelector(
  "#counter button[data-action='increment']"
);
const btnDecrement = document.querySelector(
  "#counter button[data-action='decrement']"
);
const counter = document.querySelector("#value");

let counterValue = 0;
console.log(typeof counter.textContent);
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

// =================================2==================================
// btnDecrement.addEventListener('click', onBtnDecrementClick)
// btnIncrement.addEventListener('click', onBtnIncrementClick)

//   function onBtnDecrementClick(){
//     counterValue -= 1;
//     counter.textContent = counterValue;
//   }

//   function onBtnIncrementClick(){
//     counterValue += 1;
//     counter.textContent = counterValue;
//   }
