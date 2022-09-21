const colorOption1 = document.querySelector('.card__color--option1');
const colorOption2 = document.querySelector('.card__color--option2');
const image = document.querySelector('.card__img');
const card = document.querySelector('.card');

colorOption1.addEventListener('click', () => {
  image.src = '/images/shoe1.png';
  card.style.backgroundColor = 'var(--bg-color-option1)';
})

colorOption2.addEventListener('click', () => {
  image.src = '/images/shoe2.png';
  card.style.backgroundColor = 'var(--bg-color-option2)';
})