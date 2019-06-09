(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
      // -------------------------------------------------------------
    //     Header slider Carousel
     // -------------------------------------------------------------
        
        $(".header-silder-area").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
        });
        
        //tihs code is for slider effect
        $(".header-silder-area").on('translate.owl.carousel', function () {
            $('.single-slide h1').removeClass('zoomIn animated').hide();
            $('.single-slide h2').removeClass('fadeInUp animated').hide();
            $('.slider-content-meta').removeClass('bounceInLeft animated').hide();
        });
        $(".header-silder-area").on('translated.owl.carousel', function () {
            $('.owl-item.active .single-slide h1').addClass('zoomIn animated').show();
            $('.owl-item.active .single-slide h2').addClass('fadeInUp animated').show();
            $('.owl-item.active .slider-content-meta').addClass('bounceInLeft animated').show();
        }); 
        
      // -------------------------------------------------------------
    //     Order Page Beverages Slider
     // -------------------------------------------------------------
        
        $(".order-beverages-silder").owlCarousel({
            items: 6,
            loop: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            margin: 25,
            responsiveClass: true,
            responsive: {
                300: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1170: {
                    items: 6
                }
            }
        });
        
      // -------------------------------------------------------------
    //    Home page Left Side Menu JS
     // -------------------------------------------------------------

        $(".left-menu-trigger").on("click", function(){
            $(".pizza-leftside-fixed-menu, .body-dark-overlay, .left-menu-trigger, .left-menu-close-trigger, .left-menu-trigger-area").addClass("active");
            return false;
            
        });
        $(".body-dark-overlay, .left-fixed-menu li, .left-menu-close-trigger").on("click", function(){
            $(".pizza-leftside-fixed-menu, .body-dark-overlay, .left-menu-trigger, .left-menu-close-trigger, .left-menu-trigger-area").removeClass("active");
            return false;
        });
        
 
        
    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

        //var scroll = new SmoothScroll('a[href*="#"]');
        // Add scrollspy to <body>
        $('body').scrollspy({target: ".pizza-leftside-fixed-menu", offset: 50});

        // Add smooth scrolling on all links inside the navbar
        $(".left-fixed-menu a, .back-to-top").on('click', function(event) {

          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });

          } // End if

        });

    // -------------------------------------------------------------
    // left fixed menu disable css
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 750) {
                $('.left-menu-trigger').fadeIn();
            } else {
                $('.left-menu-trigger').fadeOut();
            }
        });
    }());

    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 750) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
    }());        
        
///====================================
        
// Jquery Input JS
        
//=====================================
        
        $('#handleCounter').handleCounter();
        $('#handle_count_2').handleCounter();
        $('#handle_count_3').handleCounter();
        $('#handle_count_4').handleCounter();
        $('#handle_count_5').handleCounter();
        $('#handle_count_six').handleCounter();
        $('#handle_count_7').handleCounter();
        $('#handle_count_8').handleCounter();
        $('#handle_count_9').handleCounter();
        $('#handle_count_10').handleCounter();
        $('#handle_count_11').handleCounter();
        $('#handle_count_12').handleCounter();
        $('#handle_count_13').handleCounter();
        $('#handle_count_14').handleCounter();
        $('#handle_count_15').handleCounter();
        $('#handle_count_16').handleCounter();
        $('#handle_count_17').handleCounter();


///====================================
  


    });


    jQuery(window).load(function(){
        
     // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------
           
        new WOW().init();

        
    });


}(jQuery));	