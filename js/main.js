$(window).load(function() {
  $("body").removeClass("preload");
});

$(document).ready(function() {

  var $callout = $(".callout");
  var $selected = $(".work-nav .selected");

  resize();

  $(window).resize(resize);

  function resize() {
    var width = $selected.width();
    var left = $selected.offset().left;
    var offset = left - 1000 + (width/2);
    $callout.css("background-position", offset + "px 0");
  }

  function select($el) {
  };

  $(".work-nav a").click(function() {
    $selected = $(this);
    $(".work-nav a").removeClass("selected");
    $selected.addClass("selected");
    resize();

    var $slide = $("#carousel-" + $(this).attr("href").split("#")[1]);
    $(".carousel-item").css("opacity", 0);
    $slide.css("opacity", 1);
  });

});
