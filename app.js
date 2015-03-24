$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    // Toggle sidebar
    $('.container').toggleClass('active');

    // Toggle sidebar open/close button text
    $(this).text() == "<" ? $(this).text(">") : $(this).text("<");
  });

  // Toggle section dropdown
  $('.popular').click(function (e) {
      if ($('.section-detail-list').is(':hidden')) {
        $('.section-detail-list').slideDown(300);
      } else {
        $('.section-detail-list').slideUp(300);
      }

      // Toggle dropdown icon
      $("i", this).toggleClass("fa-angle-right fa-angle-down");
      e.preventDefault();
  });
});
