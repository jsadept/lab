
$(function() {

	$( ".menu-btn" ).click(function() {
		if ( $(".menu-btn").hasClass("on") ) {
			$(this).toggleClass( "on" );
			$(".logo").toggleClass( "logo__mobile" );
			$(document.body).toggleClass( "static" );
			$(".menu__minor-list-content").fadeOut(600);
		}
		else{
			$(this).toggleClass( "on" );
			$(".logo").toggleClass( "logo__mobile" );
			$(document.body).toggleClass( "static" );
		 	$(".menu__minor-list-content").css("display", "flex").fadeIn(600);
		}
	});	
	
		$('.drop-down__mobile').click(
		  function() {
			$(this).toggleClass( "dropul__rotate" );
		    $( this ).children(".dropul__mobile").slideToggle();
		  }, function() {
			$(this).toggleClass( "dropul__rotate" );
		    $( this ).children(".dropul__mobile").slideToggle();
		  }
		);

		$('.banner-btn').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.footer-form').offset().top }, 1000);
		  e.preventDefault();
		});





		$('.slider-items').slick({
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  prevArrow: $('.slider-btn__prev'),
		  nextArrow: $('.slider-btn__next'),
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});


	$( ".accordion-item" ).click(function() {
		console.log("start");
		if ( $(this).find(".accordion-toggle").hasClass("active") ) {
			console.log("if has class");
			$(this).find(".accordion-toggle").toggleClass( "active" );
			$(this).find(".accordion-content").slideUp(600);
		}
		else{
			console.log($(this).find(".accordion-toggle"));
			$(this).find(".accordion-toggle").toggleClass( "active" );
			$(this).find(".accordion-content").slideDown(600);
		}
	});	
});