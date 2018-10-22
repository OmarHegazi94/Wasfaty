$(document).ready(function() {
  /*********************************** NAVIGATION *************************************/
  if ($("#mainNav").offset().top > 50) {
    $("#mainNav").addClass("navbar-shrink");
  }
  // Closes responsive menu when a scroll trigger link is clicked
  $(".nav-link").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class the navbar items on scroll
  $("body").scrollspy({
    traget: "#mainNav",
    offset: 70
  });

  // On scroll down if the offset is higher than 50 pixels add navbar shrink class else remove that class
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-shrink");
      $("#mainNav .navbar-nav .nav-item .nav-link").css("color", "#004286");
      $("#mainNav #login").css("color", "#fff");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#mainNav .navbar-nav .nav-item .nav-link").css("color", "#fff");
    }
  });
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
  /*********************************** SMOOTH SCROLL *****************************************/
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            700,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  /*********************************** END *****************************************/
});
