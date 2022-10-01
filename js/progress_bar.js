const refs = {
     nextBtnEl: document.getElementById('next'),
     prevBtnEl: document.getElementById('prev'),
     stepsEl: document.querySelectorAll('.step'),
     barFrontEl: document.querySelector('.progress-bar-front'),
     barBackEl: document.querySelector('.progress-bar-back')
     
}


console.log(refs.barBackEl.style.width)

let currentChecked = 1;
refs.nextBtnEl.addEventListener('click', onNextBtnClick)

function onNextBtnClick (){
currentChecked+=1;
if(currentChecked > refs.stepsEl.length){
    currentChecked = refs.stepsEl.length
}
updateStepProgress()
}

refs.prevBtnEl.addEventListener('click', onPrevBtnClick)
function onPrevBtnClick (){
    currentChecked-=1;
    if(currentChecked < 1){
        currentChecked = 1
    }
    updateStepProgress()
    }

function updateStepProgress(){
    refs.stepsEl.forEach((stepEl, idx)=>{
        if(idx<currentChecked){
            stepEl.classList.add('checked')
            stepEl.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <small>${idx === 0
                 ? 'start': idx === refs.stepsEl.length - 1 
                 ? 'final'
                  : 'Step ' + idx }
                  </small>`;
        }else{
            stepEl.classList.remove('checked')
            stepEl.innerHTML = `<i class="fa-solid fa-business-time"></i>`
        }
    })
    const checkedNumber = document.querySelectorAll('.checked')

    refs.barFrontEl.style.width = ((checkedNumber.length - 1)/(refs.stepsEl.length - 1))* 100 + '%';

    // if(currentChecked === 1 )(
    //     refs.prevBtnEl.disabled = true
    // )
    // else{
    //     refs.prevBtnEl.disabled = false
    // }
    refs.prevBtnEl.disabled = currentChecked === 1 ? true : false;
    // if(currentChecked === 5){
    //     refs.nextBtnEl.disabled = true
    // }
    // else{
    //     refs.nextBtnEl.disabled = false
    // }
    refs.nextBtnEl.disabled = currentChecked === 5 ? true : false
}