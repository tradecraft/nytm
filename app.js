$(document).ready(function () {

  function toggle_sidebar() {
    // Toggle container state
    $('.container').toggleClass('active');

    // Toggle sidebar open/close button label
    $(this).text() == "<" ? $(this).text(">") : $(this).text("<");
  };

  // If sidebar button is clicked
  $('[data-toggle="offcanvas"]').click(function () {
    toggle_sidebar();
  });

  // If popular section line item is clicked
  $('.popular').click(function (e) {
      e.preventDefault();

      if ($('.section-detail-list').is(':hidden')) {
        $('.section-detail-list').slideDown(300);
      } else {
        $('.section-detail-list').slideUp(300);
      }

      // Toggle section detail dropdown icon
      $("i", this).toggleClass("fa-angle-right fa-angle-down");
  });

  // If article is clicked while sidebar is open, close it
  $('.article').click(function (e) {
    if ($('.container').hasClass('active')) toggle_sidebar();
  });
});
