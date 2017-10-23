$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.parallax').css({
    'transform' : 'translate(0px, -'+ wScroll /60 +'% )'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px,'+ wScroll /4 +'% )'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'% )'
  });

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  if (wScroll >= 100) {$(".logo_one").addClass("logo");} else {$(".logo_one").removeClass("logo");}

  if (wScroll >= 100) {$('.logo_one').attr('src', 'img/logo/logo_xan_always_surfing_dark_gray.png');}
     else {$('.logo_one').attr('src', 'img/logo/logo_xan_always_surfing_white_test_with_shadow_two.png');}

  if (wScroll >= 100) {$(".navbar-default .nav > li>a").addClass("effect");} else{$(".navbar-default .nav > li>a").removeClass("effect");}

  if (wScroll >= 100) {$(".nav_collapse").addClass("collapse_nav");} else{$(".nav_collapse").removeClass("collapse_nav");}

  if (wScroll >= 100) {$(".nav_change_color").addClass("nav_change_color_two");} else{$(".nav_change_color").removeClass("nav_change_color_two");}
});
