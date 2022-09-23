const rangeInputEl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

rangeInputEl.addEventListener("input", () =>
    text.style.fontSize = rangeInputEl.value + 'px'

)