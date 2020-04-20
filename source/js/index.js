let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header-nav__toggle');
let modal = document.querySelector('.modal-overlay');

  navMain.classList.remove('header-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('header-nav--closed')) {
      navMain.classList.remove('header-nav--closed');
      navMain.classList.add('header-nav--opened');
    } else {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--opened');
    }
  });


  // ------заказать-----------
  document.querySelectorAll('.btn--add').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      modal.classList.add('modal-overlay--open');
    })
  })

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-overlay--open")) {
        modal.classList.remove("modal-overlay--open");
      }
    }
  });
