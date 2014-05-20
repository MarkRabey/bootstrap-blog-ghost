//jQuery to collapse the navbar on scroll
var offset_show_down = window.innerHeight-120;
$(window).scroll(function() {
  if($(this).scrollTop() > offset_show_down) {
    $('#navigation').addClass("navbar-show-fixed");
  } else {
    $("#navigation").removeClass("navbar-show-fixed");
  }
});