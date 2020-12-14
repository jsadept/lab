$(document).ready(function() {


	$(".contact_scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 1500);
    });


	$(".lead-form").on('submit', function() {
		event.preventDefault();
		$.ajax({
			url: 'mail.php',
			data: $(this).serialize(),
			type: 'POST'
		})
		.done(function(response) {
			console.log(response);
			console.log('done');
			openSucsessPopup();
			setTimeout(function(){
			  $.magnificPopup.close();
			}, 1000);
		})
		.fail(function(xhr, status, errorThrown) {
			console.log('Error:', errorThrown, 'status', status);
			console.dir(xhr);
			openFailPopup();
			setTimeout(function(){
			  $.magnificPopup.close();
			}, 1000);
		})
	});

	$('#contact-btn').magnificPopup({
		type: 'inline',
		preloader: false,
	});


	setTimeout(function(){
	  $.magnificPopup.open({
			items: { src: '#popup' },
			type: 'inline',
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			focus: '#name',
			mainClass: 'my-mfp-slide-bottom'
		});
	}, 15000);

	// Объявление попап-функций. Плагин Magnific Popup
	var openSucsessPopup = function() {
		$.magnificPopup.open({
			items: { src: '#success-popup' },
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-slide-bottom'
		});
	};

	var openFailPopup = function() {
		$.magnificPopup.open({
			items: { src: '#fail-popup' },
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: true,
			midClick: false,
			removalDelay: 300,
			mainClass: 'my-mfp-slide-bottom'
		});
	};


	$('#callback').on('submit', function() {
		event.preventDefault();
		$.ajax({
			url: 'mail.php',
			data: $(this).serialize(),
			type: 'POST'
		})
		.done(function(response) {
			console.log(response);
			console.log('done');
			openSucsessPopup();
			setTimeout(function(){
			  $.magnificPopup.close();
			}, 1000);
		})
		.fail(function(xhr, status, errorThrown) {
			console.log('Error:', errorThrown, 'status', status);
			console.dir(xhr);
			openFailPopup();
			setTimeout(function(){
			  $.magnificPopup.close();
			}, 1000);
		})
	});
});