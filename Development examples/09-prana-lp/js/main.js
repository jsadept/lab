$(document).ready(function() {
	// image, galery (models, objects)
	$('.objects').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
	// $('.model-img').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	closeOnContentClick: true,
	// 	closeBtnInside: false,
	// 	mainClass: 'mfp-with-zoom mfp-img-mobile',
	// 	zoom: {
	// 		enabled: true,
	// 		duration: 300, // don't foget to change the duration also in CSS
	// 		opener: function(element) {
	// 			return element.find('img');
	// 		}
	// 	}
		
	// });


	jQuery(function($){
	   $("#phone").mask("389999999999");
	});


	// slow menu animation
	$("#bd-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 1500);
    });
	$("#bd-menu-mobile").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 3200);
    });


    // mobile-toggle
	$( "#toggle" ).click(function() {
	  $(this).toggleClass( "on" );
	  $(".header__menu-hidden").slideToggle();
	});
	// autoclose mobile-toggle
	$( window ).scroll(function() {
		if ($( "#toggle" ).hasClass( "on" )) {
			  $(this).removeClass( "on" );
			  $(".header__menu-hidden").slideUp();
		};
		$( "#toggle" ).removeClass( "on" );
		
	});

// Form
	$( ".bd-btn-m" ).magnificPopup();

	$( ".bd-btn-m" ).click(function() {
    var product = this.previousSibling.previousSibling.id;
    console.log(product);
    	$('#product').attr("value", product); 
	});

});









