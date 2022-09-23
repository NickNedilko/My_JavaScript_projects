const inputEl = document.querySelector("#validation-input");
console.log(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
  }
});

// ==============================2======================================

// inputEl.addEventListener("blur", inputFieldValidation);

// function inputFieldValidation() {
//   if (inputEl.value.length == inputEl.dataset.length) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.add("invalid");
//   }
// }
