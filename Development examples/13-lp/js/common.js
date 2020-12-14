$(function() {

	//MOBILE-MENU
	$( "#toggle" ).click(function() {
	  $(this).toggleClass( "on" );
	  $(".hidden-menu").slideToggle();
	});

	$("#main-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 1500);
    });
	$("#footer-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 1500);
    });
	$("#mobile-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 3200);
    });




  $('.life-slider').slick({
    
	  dots: true,
	  infinite: false,
	  speed: 300,
	  variableWidth: true,
	  slidesToShow: 5,
	  slidesToScroll: 3,
	  prevArrow: $('.prev-l'),
	  nextArrow: $('.next-l'),
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	  		dots: false
	      }
	    }
	  ]
  });

$('.video-slider').slick({
    
	  dots: true,
	  infinite: false,
	  speed: 300,
	  variableWidth: true,
	  slidesToShow: 5,
	  slidesToScroll: 3,
	  prevArrow: $('.prev-v'),
	  nextArrow: $('.next-v'),
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	  		dots: false
	      }
	    }
	  ]
  });

$('.photo-slider').slick({
    
	  dots: true,
	  infinite: false,
	  speed: 300,
	  variableWidth: true,
	  slidesToShow: 5,
	  slidesToScroll: 3,
	  prevArrow: $('.prev-p'),
	  nextArrow: $('.next-p'),
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	  		dots: false
	      }
	    }
	  ]
  });











  // popup
  $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// Form
		$(".popup-with-form").magnificPopup();









	//Animate
	$('#header-banner').animated('bounceInLeft');
	$('.item > div > img').animated('flipInY');
	$('.item > div > p').animated('slideInDown');
	$('.diagram > div').animated('flipInY');
	$('.ban').animated('flipInY');
	$('big').animated('flipInY');
});
