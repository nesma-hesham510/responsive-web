$.fn.isOnScreen = function(el){
  var element = this.get(0);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}
// slide ins
$(window).scroll(function() {
  if($(".about").isOnScreen() == true) {
  $(".about").addClass("zoomIn");
}
}).scroll();

$("i").hover(function() {
  $( this ).toggleClass("scale");
});
