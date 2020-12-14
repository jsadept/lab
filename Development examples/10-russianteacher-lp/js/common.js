$(function() {

	
$( ".menu-btn" ).click(function() {
	if ( $(".menu-btn").hasClass("on") ) {
		$(this).toggleClass( "on" );
		$(".menu__minor").fadeOut(600);
	}
	else{
		$(this).toggleClass( "on" );
	 	$(".menu__minor-list-content").fadeIn(600);
	}
});



$("#menu__main").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 1500);
    });



let playButton = document.querySelector('.video-container a');
playButton.addEventListener('click', playVideo);

function playVideo(e) {
  e.preventDefault();
  let videoContainer = this.parentNode;
  let videoUrl = this.href;
  let videoId = videoUrl.split('.com/')[1];
  let iframeUrl;
    
  if(videoUrl.includes('vimeo')) {
    // vimeo
    videoId = videoId.split('?')[0];
    iframeUrl = `//player.vimeo.com/video/${videoId}?autoplay=1`;
  } else {
    // youtube
    videoId = videoId.split('v=')[1];
    iframeUrl = `//www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  
  videoContainer.innerHTML = `<iframe src="${iframeUrl}" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
}




	$('.accordion').find('.accordion-toggle').click(function() {
		$(this).next().slideToggle('600');
		$(".accordion-content").not($(this).next()).slideUp('600');
	});
	$('.accordion-toggle').on('click', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});


 $('.teacher').animated('jackInTheBox');
 $('.cls-2').animated('slideInRight');
 $('circle').animated('slideInLeft');
 $('.product-item__icon').animated('fadeInDown');
 $('.video-container > a, .video-container > p').animated('jackInTheBox');
 $('.accordion-toggle').animated('fadeInDown');

 setInterval(function() {
    var animationName = 'animated fadeInDown';
    var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('#arrow').addClass(animationName).one(animationend, function() {
      $(this).removeClass(animationName);
    });
  }, 1000);
 


});


