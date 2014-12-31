'use strict';

require('jquery');
// var scrollAmount = 95;

// $(window).on('scroll', function() {
//   if ($(window).scrollTop() >= scrollAmount && !$('nav').hasClass('fixed')) {
//     $('nav').addClass('fixed');
//   }
//   else if ($(window).scrollTop() < scrollAmount && $('nav').hasClass('fixed')) {
//    $('nav').removeClass('fixed');
//   }
// });

(function() {
  var p = $('#gallery').portfolio();
  p.init();
})();
