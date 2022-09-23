function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColorChangerEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const spanEl = document.querySelector('.color')

btnColorChangerEl.addEventListener('click', onBtnClick)

function onBtnClick (){
bodyEl.style.backgroundColor = getRandomHexColor();
spanEl.textContent = bodyEl.style.backgroundColor;
}

