const navLinks = document.querySelectorAll('.js-nav-link');

changeActiveLink();

function changeActiveLink() {
  navLinks.forEach((el) => {
    el.addEventListener('click', () => {
      removeActiveLink();
      el.classList.add('active');
    });
  });
}

function removeActiveLink() {
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
}


