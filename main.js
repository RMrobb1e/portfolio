$(document).ready(function() {
  console.log("ready");
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $("nav a[href*='#']").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      2000
    );
  });

  $("#up").on("click", function() {
    console.log("asd");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true //if you want animation to happen only once
  });
});
