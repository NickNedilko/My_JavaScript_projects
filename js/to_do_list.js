const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('.input'),
    ulEl: document.querySelector('.list'),
    liEls: document.querySelectorAll('.list li'),
    checkBtnEls: document.querySelectorAll('.fa-circle-check'),
    removeBtnEls: document.querySelectorAll('.fa-trash')
    
}
let list = JSON.parse(localStorage.getItem('list')) 

list.forEach(task=>{
    toDoList(task)
    
})

onBtnClick();
toDoList();

refs.formEl.addEventListener( 'submit', (evt)=>{
    evt.preventDefault();
    toDoList();
  
    
   
});


function toDoList(task){

    let newTask = refs.inputEl.value;
    if(task){
        newTask = task.name
    }
   
    let newLiEl =
    `<li>${newTask}
    <i class="fa-solid fa-circle-check"></i>
    <i class="fa-sharp fa-solid fa-trash"></i>
  </li>`
  if(newTask===""){
    return;
  }else{
    refs.ulEl.insertAdjacentHTML("beforeend", newLiEl)
    refs.inputEl.value = '';
    refs.liEls = document.querySelectorAll('.list li')
    
  }
  
  updateLocalStorage ()

}


function onBtnClick(){

    refs.liEls.forEach(liEl =>{
        liEl.addEventListener('click', (evt)=>{
       if(evt.target.classList.contains('fa-circle-check')){
        liEl.classList.toggle('checked');
        updateLocalStorage ()
       }
       if(evt.target.classList.contains('fa-trash')){
        
        evt.target.parentElement.remove()
        updateLocalStorage ()
       }
        })
        })
}
   
function updateLocalStorage (){
    const liEls = document.querySelectorAll('li')
    let list = []
    liEls.forEach(liEl =>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains('checked')
            
        })
    })
    localStorage.setItem('list', JSON.stringify(list))
}    





