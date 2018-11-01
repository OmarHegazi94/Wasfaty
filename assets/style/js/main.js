/************************** SPINNER ****************************/
function myFunction() {
  myVar = setTimeout(showPage);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("wrapper").style.display = "block";
  document.getElementById("footer").style.display = "block";
}

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
      $("#mainNav .navbar-nav .nav-item .nav-link").css("color", "#000");
      $("#mainNav #login").css("color", "#000");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#mainNav .navbar-nav .nav-item .nav-link").css("color", "#fff");
    }
  });
  /*********************************** SCROLL ANIMATION **************************************/
  window.sr = ScrollReveal();
  sr.reveal(".card-deck", {
    duration: 1500,
    origin: "bottom",
    distance: "150px",
    mobile: false,
    viewFactor: 0.2
  });

  /** Form animation **/
  $("form ,#contact-form")
    .animate(
      {
        opacity: 1,
        width: ["100%", "swing"],
        height: ["100%", "swing"]
      },
      10000,
      "linear"
    )
    .finish();
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
