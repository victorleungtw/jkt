'use strict';

$(document).ready(function() {
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

$(document).ready(function() {
  var click = $('.menu-item-3, .about-close');
  $(click).click(function() {
    $('.menu-item-3-content').fadeToggle();
  });
});

$(document).ready(function() {
  var click = $('.menu-item-4, .resume-close');
  $(click).click(function() {
    $('.menu-item-4-content').fadeToggle();
  });
});
