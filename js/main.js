jQuery(document).ready(function($) {
  /* ===адаптивне меню===*/
  $(window).resize(function() {
    var widthWindow = $(window).width();

    if (widthWindow <= 768) {
      $(".mob-menu_left-block").append($(".header__menu"));
      $(".mob-menu_right-block").append($(".office_link-block"));
      $(".office_link-block").append($(".header__contact-block_fb"));
      $(".office_link-block").append($(".header__contact-block_shopping"));
    }
    if (widthWindow > 768) {
      $(".header_menu_despot").append($(".header__menu"));
      $(".header__contact-block_upper").append($(".office_link-block"));
      $(".fb-block").append($(".header__contact-block_fb"));
      $(".header__contact-block").append($(".header__contact-block_shopping"));
    }
  });
  $(window).resize();

  $(".mob-btn").on("click", function() {
    let contBlock = $(".mob-menu");

    if (contBlock.hasClass("display-none")) {
      contBlock.removeClass("display-none").addClass("display-flex");
    } else {
      contBlock.removeClass("display-flex").addClass("display-none");
    }
  });
  $("#header-tels").on("click", function() {
    let contBlock = $("#header__contact-block_telephones");

    if (contBlock.hasClass("display-none")) {
      contBlock.removeClass("display-none").addClass("display-block");
    } else {
      contBlock.removeClass("display-block").addClass("display-none");
    }
  });
  $("#footer-tels").on("click", function() {
    let contBlock = $("#footer__contact-block_telephones");

    if (contBlock.hasClass("display-none")) {
      contBlock.removeClass("display-none").addClass("display-block");
    } else {
      contBlock.removeClass("display-block").addClass("display-none");
    }
  });
  /*===search-btn===*/

  $("#search-link").on("click", function() {
    let search = $(".search-block");

    if (search.hasClass("display-none")) {
      search.removeClass("display-none").addClass("display-block");
    } else {
      search.removeClass("display-block").addClass("display-none");
    }
  });

  $(".call-back").on("click", function() {
    $(".contact__call-back").css("display", "flex");
  });
  $(".call-back_btn-ex").on("click", function() {
    $(".contact__call-back").css("display", "none");
  });
});
