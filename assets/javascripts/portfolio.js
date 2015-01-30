/*jslint browser:true */
'use strict';

var $ = require('jquery');
// var jQuery = require('jquery');

(function() {
  var scrollAmount = 80;

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= scrollAmount && !$('nav').hasClass('fixed')) {
      $('nav').addClass('fixed');
    }
    else if ($(window).scrollTop() < scrollAmount && $('nav').hasClass('fixed')) {
      $('nav').removeClass('fixed');
    }
  });

  $(function() {
    var p = $('#gallery').portfolio({
      enableKeyboardNavigation: true, // enable / disable keyboard navigation (default: true)
      loop: false, // loop on / off (default: false)
      easingMethod: 'easeOutQuint', // other easing methods please refer: http://gsgd.co.uk/sandbox/jquery/easing/
      height: '500px', // gallery height
      width: '100%', // gallery width in pixels or in percentage
      lightbox: false, // dim off other images, highlights only currently viewing image
      showArrows: true, // show next / prev buttons
      logger: false, // for debugging purpose, turns on/off console.log() statements in the script
      spinnerColor: '#000', // Ajax loader color
      offsetLeft: -4, // position left value for current image
      opacityLightbox: '0.2' // opacity of other images which are not active
    });
    p.init();
  });
})();
