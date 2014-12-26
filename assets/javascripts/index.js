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
  $('.menu-item-3').click(function() {
    $('.menu-item-3-info').fadeToggle();
  });
});
