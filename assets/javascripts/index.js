/*jslint browser:true */
'use strict';

var jQuery = require('jquery');

(function($) {
  $(function() {
    // var fade = $('#fadeOut-item, #fadeOut-item-2, #fadeOut-item-3, #fadeOut-item-4');
    $('.page-load').hide().fadeIn(6000);
    // $(fade).click(function(e) {
    //   e.preventDefault();
    //   newLocation = this.href;
    // $('body').fadeOut(2000, newpage);
    // });
    // function newpage() {
    //   window.location = newLocation;
    // }
  });

  $(function() {
    var click = $('.menu-item-3, .about-close');
    $(click).click(function() {
      if ($('.menu-item-4-content').is(':visible')) {
        $('.menu-item-4-content').fadeToggle();
        $('.menu-item-3-content').fadeToggle();
      } else {
        $('.menu-item-3-content').fadeToggle();
      }
    });
  });

  $(function() {
    var click = $('.menu-item-4, .resume-close');
    $(click).click(function() {
      if ($('.menu-item-3-content').is(':visible')) {
        $('.menu-item-3-content').fadeToggle();
        $('.menu-item-4-content').fadeToggle();
      } else {
        $('.menu-item-4-content').fadeToggle();
      }
    });
  });
})(jQuery);
