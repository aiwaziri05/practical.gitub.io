document.addEventListener('DOMContentLoaded', (currentYear) => {
  currentYear = document.querySelector('.js-container');

  currentYear.addEventListener('animationend', () => {
    const newYear = document.querySelector('.js-new-year');
    newYear.innerHTML = '4';

    document.querySelector('.js-current-year')
      .innerHTML = '🎊Happy New Year🎗️202';
  });

});