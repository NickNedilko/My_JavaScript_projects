const starsEl = document.querySelectorAll('.fa-star');
const emojisEl = document.querySelectorAll('.far');
const bodyEl = document.querySelector('body');
const colors = ['red', 'tomato', 'orange', 'lightgreen', 'green']

starsEl.forEach((starEl, index)=> {
  starEl.addEventListener('click', () =>{
     updateRating(index)
  });
});

function updateRating(index){
  starsEl.forEach((starEl,idx)=>{
     if(idx < index + 1){
      starEl.classList.add('active');
      starEl.style.color = colors[index]
     }else{
      starEl.classList.remove('active')
      starEl.style.color = ''
     } 

     emojisEl.forEach((emojiEl )=>{
      emojiEl.style.transform = `translateX(-${index*50}px)`;
      emojiEl.style.color = colors[index]
      bodyEl.style.background = colors[index]
     })

  })
} 

