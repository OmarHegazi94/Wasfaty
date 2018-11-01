$(document).ready(function() {
  /********************************* HEADER SLIDER ************************************/
  $(".owl-carousel").owlCarousel({
    animateOut: "lightSpeedOut",
    animateIn: "fadeInUp",
    stagePadding: 0,
    smartSpeed: 450,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*********************************** END *****************************************/
});
