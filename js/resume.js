(function ($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 400, 'easeInOutExpo');
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $('.clickable-card-container').click(function(){ // When the element card-container is click it triggers the function
    $(this).toggleClass("flipped"); // Finds the element and toggles the class called flipped to let you know the card is currently flipped or active
    $('.clickable-card-container .flipped').toggle("flipper"); // If the card-container element also contains the class flipped it will toggle the flip
  });

  //show and hide color on hover
  $('.devicon').hover(function () {
    $(this).addClass('colored');
  }, function () {
    $(this).removeClass('colored');
  });
  $('.spring-logo').hover(function () {
    $(this).attr('src','img/spring-logo.svg')
  }, function () {
    $(this).attr('src','img/spring-logo-plain.svg')
  })

})(jQuery); // End of use strict
