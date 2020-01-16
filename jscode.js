$(document).ready(function() {
  $('.hamburger-button').on('click', function () {
  $('.animated-icon3').toggleClass('open');
  });

  $(function() {
    // THIS WILL FIRE WHENEVER DROPDOWN SHOW
    $('#submenu-icon').on('show.bs.dropdown', function () {
        $(this).find('.angle-icon').removeClass('fa-angle-down').addClass('fa-angle-up');
    });

    // THIS WILL FIRE WHENEVER DROPDOWN HIDE
    $('#submenu-icon').on('hide.bs.dropdown', function () {
        $(this).find('.angle-icon').removeClass('fa-angle-up').addClass('fa-angle-down');
    });
});
})
