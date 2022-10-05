const refs = {
  menuEl: document.querySelector('.menu'),
  menuTextEl: document.querySelector('.menu p'),
  socialListEl: document.querySelector('.social-lists'),
  iconEl: document.querySelector('.fas'),
  liEls: document.querySelectorAll('.social-lists li'),

}

const {menuEl, socialListEl, menuTextEl, iconEl, liEls} = refs;

menuEl.addEventListener('click', onClickMenu);

function onClickMenu (){
socialListEl.classList.toggle('hide')
iconEl.classList.toggle('rotate')
}

liEls.forEach((liEl =>{
 liEl.addEventListener('click', ()=>{
  menuTextEl.innerHTML = liEl.innerHTML;
  socialListEl.classList.add('hide');
  iconEl.classList.toggle('rotate')
 })
}))