const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

const alfSmallArray = [];
 for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++){
    let ad = String.fromCharCode(i);
    alfSmallArray.push(ad);
 } 
 const alfBigArray = alfSmallArray.join('').toUpperCase().split('')

const symbolArray = [];
for (let i = '!'.charCodeAt(0); i <= '@'.charCodeAt(0); i++){
  const validNumber = Number(String.fromCharCode(i))
  if((Number.isNaN(validNumber))){
    let ad = String.fromCharCode(i);
    symbolArray.push(ad);
  }
 
} 

const charArray = [...alfBigArray, ...alfSmallArray,...symbolArray]
const chars = charArray.join('');
console.log(chars);

function createPassword() {
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);

  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " copied!";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}

