jQuery(document).ready(function ($) {
  /* Every time the window is scrolled ... */
  const doAnimations = function () {
    // Calc current offset and get all animatables
    let offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');
    // Unbind scroll handler if we have no animatables
    if ($animatables.size() == 0) {
      $(window).off('scroll', doAnimations);
    }
    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      let $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() + 100 < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });
  };
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});
