function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", onBtnCreateClick);
function onBtnCreateClick() {
  divEl.innerHTML = "";
  const boxes = createBoxes();
  divEl.append(...boxes);
}
function createBoxes() {
  let amount = inputEl.value;
  let newArrBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = getRandomHexColor();
    newArrBoxes.push(box);
  }
  return newArrBoxes;
}

btnDestroyEl.addEventListener("click", onBtnDestroyClick);

function onBtnDestroyClick() {
  console.log("all remove");
  // первый способ удаления=====================================
  divEl.innerHTML = "";

  // второй способ удаления===================================
  // while (divEl.firstChild) {
  //   divEl.removeChild(divEl.lastChild)};

  // третий способ удаления ===================
  // divEl.querySelectorAll("div").forEach((div) => div.remove());
}
