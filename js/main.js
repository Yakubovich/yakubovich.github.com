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

  $(".work-nav a").click(function() {
    $selected = $(this);
    $(".work-nav a").removeClass("selected");
    $selected.addClass("selected");
    resize();
    var $slide = $("#carousel-" + $(this).attr("href").split("#")[1]);
    if ($("body").attr("id") == "index") {
      $(".carousel-item").css("opacity", 0).removeClass("selected");
      $slide.css("opacity", 1);
    } else {
      $(".about").hide().removeClass("selected");
      $slide.show();
    }
    $slide.addClass("selected");
  });

  $("a[href=" + location.hash + "]").click();

  $("#index .carousel-item").click(function() {
    window.location.href = "work.html" + $selected[0].hash;
  });

});
