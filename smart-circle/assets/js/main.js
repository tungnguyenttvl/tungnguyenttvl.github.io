$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    
    // Click active class 
    $(".nav-link").click(function () {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    }); 
    
    // Click To Scroll 
    $(".mein-menu .navbar-nav a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 80,
          },
          100
        );
      event.preventDefault();
    });



    /* niceSelect */
    $("select").niceSelect();

    /* Wow js */
    new WOW().init();

    /* Magnific Popup Activation Probucket */
    $(".popup").magnificPopup({
      type: "video",
    });

    /* Counter */
    $(".counter-item .count-num").rCounter({
      duration: 60
    });

    /* testimonial-slider */
    var $testo = $(".testo-box");
    $testo.owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      navText: [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>',
      ],
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      smartSpeed: 2000,
      margin: 30,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 2
        },
        1199: {
          items: 2
        },
        1200: {
          items: 2
        },
        1701: {
          items: 3
        }
      }
    });

    /* range-slider */
    $(function () {
      $("#btc-range").slider({
        range: "min",
        value: 16000,
        min: 5000,
        max: 3000000,
        slide: function (event, ui) {
          $("#btc-amount").val("$" + ui.value);
        }
      });
      $("#btc-amount").val("$" + $("#btc-range").slider("value"));
    });

    $(function () {
      $("#rub-range").slider({
        range: "min",
        value: 24,
        min: 1,
        max: 120,
        slide: function (event, ui) {
          $("#rub-amount").val(ui.value);
        }
      });
      $("#rub-amount").val($("#rub-range").slider("value"));
    });


    /*back to top-*/
    $(document).on("click", "#scrollUp", function () {
      $("html,body").animate({
        scrollTop: 0,
      },
        100
      );
    });

    /* sticky navigation menu */
    var lastScrollTop = "";
    $(window).on("scroll", function () {
      var $window = $(window);
      if ($window.scrollTop() > 0) {
        $(".mein-menu").addClass("nav-fixed");
      } else {
        $(".mein-menu").removeClass("nav-fixed");
      }

      /*---------------------------
         back to top show / hide
     ---------------------------*/
      var st = $(this).scrollTop();
      if ($(window).scrollTop() > 500) {
        $("#scrollUp").fadeIn();
      } else {
        $("#scrollUp").fadeOut();
      }
      lastScrollTop = st;
    });

  });

  $(window).on("load", function () {
    /*Preloader*/
    $('.preloader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  });
});