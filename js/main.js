$(document).ready(function() {
  //   $('.project-area .grid').isotope({
  //     filter: '*',
  //   });

  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true },
  });

  // Owl-carousel

  $('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
    },
  });
  //   $('.grid').masonry({
  //     // options
  //     itemSelector: '.element-item',
  //     columnWidth: 160,
  //     gutter: 10,
  //   });
  // sticky navigation menu

  let nav_offset_top = $('.header_area').height() + 50;

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area .main-menu').addClass('navbar_fixed');
        } else {
          $('.header_area .main-menu').removeClass('navbar_fixed');
        }
      });
    }
  }

  navbarFixed();
});
