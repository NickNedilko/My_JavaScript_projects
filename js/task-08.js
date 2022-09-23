const loginFormEl = document.querySelector(".login-form");
const formInputEl = document.querySelectorAll(".login-form input");
console.log(formInputEl);
loginFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };
  console.log(formData);
  if (!(password && email)) {
    alert("все поля должны быть заполнены");
  }
  loginFormEl.reset();
}

// =====================================FormData=============================================

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   console.log(formData);
//   formData.forEach((x, y) => {
//     const formData = {
//       [y]: x,
//     };
//     console.log(formData);
//     if (!x) {
//       alert("все поля должны быть заполнены");
//     }
//     loginFormEl.reset();
//   });
// }
