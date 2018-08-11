$(function() {
  // Auto play modal video
  $('.video').click(function() {
    const modal = $(this).data('target');
    const videoSrc = $(this).attr('data-video');
    const videoSrcAuto = videoSrc + '?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1';
    $(modal + ' iframe').attr('src', videoSrcAuto);
    $(modal + ' button.close').click(function() {
      $(modal + ' iframe').attr('src', videoSrc);
    });
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(e) {
  e.preventDefault();
  $(this).ekkoLightbox();
});

$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slidetoScroll: 1
});