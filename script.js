const title = document.querySelector('.js-title');
const container = document.querySelector('.container');
const poupUp = document.querySelector('.js-popup');

function newYear() {
  title.addEventListener('click', () => {
    title.classList.toggle('active');
    container.classList.toggle('newyear');

    if(title.classList.contains('active')) {
      poupUp.innerHTML = '🎊 Happy🎗️New🎗️Year✨🎉';

      setTimeout(() => {
        poupUp.innerHTML = '';
      }, 5000);
    } 
    
  });

}


newYear();