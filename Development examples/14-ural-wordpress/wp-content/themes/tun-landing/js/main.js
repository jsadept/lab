$('.top-line_menu-button').click(function() {
	$(this).toggleClass('active');

	if($(this).hasClass('active')) {
		$('.top-line_menu').slideDown();
	} else {
		$('.top-line_menu').slideUp();
	}
});

$("#fileVl").on("change", function () {
	var name = $(this)[0].files[0].name;
	if(name.length > 15) {
		$(this).parent().find(".main-page_order-file-preview-text").text(name.substring(0, 5) + '...' + name.slice(name.length - 6));
	} else {
		$(this).parent().find(".main-page_order-file-preview-text").text(name);
	}
	
	$('.main-page_order-file-preview-delete').show();
});

$(".main-page_order-file-preview-delete").click(function () {
	$("#fileVl").val('');
	$("#fileVl").parent().find(".main-page_order-file-preview-text").empty();
	$('.main-page_order-file-preview-delete').hide();
});

$('.button-order, #request_a_call').click(function() {
	$('.modal').addClass('active');
	$('body').addClass('modal_active');
});

$('.modal_close').click(function() {
	$('.modal').removeClass('active');
	$('body').removeClass('modal_active');
});

$("input[name = 'checkbox[]']").change(function () {
    if (this.checked) {
		$(".modal_checkmark").toggleClass('active');
    }else {
		$(".modal_checkmark").toggleClass('active');
    };
});



document.addEventListener( 'wpcf7mailsent', function( event ) {
 if(event.detail.contactFormId=="123"){ // 123 это id формы для отслеживания
 	setTimeout(function(){
		$('.modal').removeClass('active');
		$('body').removeClass('modal_active');
 	},5500);  //5500 = 5,5 секунды
 }
}, false );


function CopyToClipboard(elem) {
    var range = document.createRange();
    range.selectNode(document.getElementById(elem));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
}


$("#main-order-form").submit(function(e) {
    // отменяем стандартное поведение браузера
    e.preventDefault();
    var formData = new FormData(this);
    var request = $.ajax({
      	url: $(this).parent('form').attr('action'),
      	type: 'post',
      	data: formData,
      	success: function(result){
        },
    });
  });