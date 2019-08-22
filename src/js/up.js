$(function () {
  let up = $('#up');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      up.show('slow');
    } else {
      up.hide('slow');
    }
  });

  up.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});
