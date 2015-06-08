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

  var $carousel = $("#carousel");
  var $cloned = $carousel.clone().removeClass("main-carousel").attr("name", "cloned");
  $cloned.appendTo($("body"));

  $(".next").click(function() {
    $(".work-nav .selected").parent().next().find("a").click()
  });

  $(".work-nav a").click(function() {

    if ($(this).parent().parent().parent().parent().attr("name") === "cloned")
      var $other = $carousel;
    else
      var $other = $cloned;

    $selected = $(this);

    $(".work-nav a").removeClass("selected");
    $selected.addClass("selected");
    $other.find("a[href=" + $(this).attr("href") + "]").addClass("selected");

    resize();
    var project = $(this).attr("href").split("#")[1];
    var $slide = $("#carousel-" + project);

    $carousel.removeClass().addClass("bg-" + project);
    $cloned.removeClass().addClass("bg-" + project);

    $(".about").hide().removeClass("selected");
    $slide.show();
    $slide.addClass("selected");

	  $("body").animate({scrollTop: 0}, 500);
  });

  $("#carousel[name='main-carousel'] a[href=" + location.hash + "]").click();

  $("#index .carousel-item").click(function() {
    window.location.href = "work.html" + $selected[0].hash;
  });

  var carouselPosition = $carousel.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > carouselPosition) {
      $cloned.show();
    } else {
      $cloned.hide();
    }
  });

});
