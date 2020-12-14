var swapBtn = document.getElementById('swap-btn');
var nav = document.getElementById('nav');
var contentBody = document.getElementById('content-body');
var status = window.getComputedStyle(nav, null);

swapBtn.onclick = function() {
	if(nav.style.opacity == '0'){
		contentBody.style.display = 'none';
		nav.style.opacity = '1';		
	}
	else{
		contentBody.style.display = 'block';
		nav.style.opacity = '0';
	}
}
