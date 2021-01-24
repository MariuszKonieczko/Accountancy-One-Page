jQuery(document).ready(function ($) {
  const hamburger = $('.hamburger')[0];

  hamburger.addEventListener(
    'click',
    function () {
      $('.page-nav')[0].classList.toggle('nav-opened');
    },
    false
  );

  $('.navigation-menu__element').each(function () {
    this.addEventListener(
      'click',
      function () {
        $('.page-nav')[0].classList.toggle('nav-opened');
      },
      false
    );
  });

  /////////////////////STICKY NAVBAR////////////////////
  const stickyNavBar = $('.page-header').offset().top;
  const stickyNavigation = function () {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavBar) {
      $('.page-header').css({
        position: 'fixed',
        top: '0px',
        margin: 'auto',
        left: '0',
        right: '0',
      });
    } else {
      $('.page-header').css({
        position: 'relative',
      });
    }
  };
  $(window).scroll(function () {
    stickyNavigation();
  });
  /////////////////////////ANCHOR//////////////////////////
  $(document).on('scroll', onScroll);
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off('scroll');
    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    let target = this.hash,
      $target = $(target);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        'swing',
        function () {
          window.location.hash = target;
          $(document).on('scroll', onScroll);
        }
      );
  });
});

function onScroll() {
  var scrollPos = $(document).scrollTop();
  $('.page-nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $('.page-nav .navigation-menu li a').removeClass('active');
      currLink.addClass('active');
    } else {
      currLink.removeClass('active');
    }
  });
}
