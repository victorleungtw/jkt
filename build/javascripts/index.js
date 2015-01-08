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
    var click = $('.menu-1');
    $(click).click(function() {
      if ($('.menu-2-content, .menu-3-content, .menu-4-content').is(':visible')) {
        $('.menu-2-content, .menu-3-content, .menu-4-content').hide();
        $('.menu-1-content').fadeToggle();
      } else {
        $('.menu-1-content').fadeToggle();
      }
    });
  });

  $(function() {
    var click = $('.menu-2');
    $(click).click(function() {
      if ($('.menu-1-content, .menu-3-content, .menu-4-content').is(':visible')) {
        $('.menu-1-content, .menu-3-content, .menu-4-content').hide();
        $('.menu-2-content').fadeToggle();
      } else {
        $('.menu-2-content').fadeToggle();
      }
    });
  });

  $(function() {
    var click = $('.menu-3');
    $(click).click(function() {
      if ($('.menu-1-content, .menu-2-content, .menu-4-content').is(':visible')) {
        $('.menu-1-content, .menu-2-content, .menu-4-content').hide();
        $('.menu-3-content').fadeToggle();
      } else {
        $('.menu-3-content').fadeToggle();
      }
    });
  });

  $(function() {
    var click = $('.menu-4');
    $(click).click(function() {
      if ($('.menu-1-content, .menu-2-content, .menu-3-content').is(':visible')) {
        $('.menu-1-content, .menu-2-content, .menu-3-content').hide();
        $('.menu-4-content').fadeToggle();
      } else {
        $('.menu-4-content').fadeToggle();
      }
    });
  });
})(jQuery);
