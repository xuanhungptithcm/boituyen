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
  reportWindowSize();
});
function reportWindowSize() {
  const column1 = document.getElementsByClassName('column1');
  const element = column1[0].getElementsByClassName('element-item');
  const mainProduct = document.getElementsByClassName('flex grid');

  if (window.innerWidth < 792) {
    const height = element[0].offsetHeight + element[1].offsetHeight + element[2].offsetHeight + 30;
    console.log(height);

    mainProduct[0].style.height = height + 'px';
  } else {
    const height = element[0].offsetHeight + element[1].offsetHeight + element[2].offsetHeight + 60;
    mainProduct[0].style.height = height + 'px';
  }
}

window.onresize = reportWindowSize;
