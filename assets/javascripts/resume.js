'use strict';

var scrollAmount = 95;

$(window).on('scroll', function() {
  if ($(window).scrollTop() >= scrollAmount && !$('nav').hasClass('fixed')) {
    $('nav').addClass('fixed');
  }
  else if ($(window).scrollTop() < scrollAmount && $('nav').hasClass('fixed')) {
   $('nav').removeClass('fixed');
  }
});
