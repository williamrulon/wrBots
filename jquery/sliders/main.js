
$(function() {
  // config
  var width = 720;
  var animateionSpeed = 1000;
  var pause = 3000;
  var current = 1;

  //cash dom
  var $slider = $('#slider');
  var $container = $slider.find('.slides');
  var $slides = $container.find('.slide');

  //set interval
  var interval;

  function startSlider() {
    interval = setInterval(function() {
      $container.animate({'margin-left' : '-='+width}, animateionSpeed, function() {
        current++;
        if(current === $slides.length) {
          current = 1;
          $container.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function pausesSlider() {
    clearInterval(interval);
  }

  $slider.on('mouseenter', pausesSlider).on('mouseleave', startSlider);

startSlider();
});
