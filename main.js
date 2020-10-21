$(function () {
  $(".toggle").on("click", function () {
    if ($(".navbar-menu").hasClass("active")) {
      $(".navbar-menu").removeClass("active");
    } else {
      $(".navbar-menu").addClass("active");
    }
  });
});
