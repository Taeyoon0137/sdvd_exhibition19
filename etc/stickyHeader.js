$(document).ready(function(){
  var w_width = $(window).width();
  var h_height = $(window).height();

  $(".landing").height(h_height);
})

function onScroll(e) {
  if(window.scrollY == h_height) {body.classList.remove('posTop');}
}
