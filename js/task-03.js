const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const newLiEl = images.map(element => {
  const liEl = document.createElement('li')
  const  imgEl = document.createElement('img');
  imgEl.src = element.url;
  imgEl.alt = element.alt;
  imgEl.classList.add('list__img');
  liEl.classList.add('list__item')

  liEl.appendChild(imgEl);
  return liEl;
})
const ulEl = document.querySelector('.gallery');
ulEl.classList.add('list');
ulEl.append(...newLiEl);

