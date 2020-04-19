  var navMain = document.querySelector('.header-nav');
  var navToggle = document.querySelector('.header-nav__toggle');
  var link = document.querySelector(".btn--add");
  var modal = document.querySelector(".card-product__form");

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

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("card-product__modal-wrapper--open");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("card-product__modal-wrapper--open")) {
        modal.classList.remove("card-product__modal-wrapper--open");
      }
    }
  });
