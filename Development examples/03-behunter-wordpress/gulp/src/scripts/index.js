(() => {




    let menuBtn = document.getElementById('menu-btn');
    let mainContent = document.getElementById('mainContent');
    let mainHeader = document.getElementById('mainHeader');
    let pageBody = document.getElementById('pageBody');
    let topBtn = document.getElementById('button-to-top');


    
        menuBtn.addEventListener('click', function(event) {
            if(window.getComputedStyle(menuBtn).display != 'none'){
                mainHeader.style.marginLeft = '0px';
                mainHeader.style.overflow = 'auto';
                mainHeader.style.height = '101vh';
                pageBody.style.overflow = 'hidden';
            }
        });
        mainContent.addEventListener('click', function(event) {
            if(window.getComputedStyle(menuBtn).display != 'none'){
            	if(window.getComputedStyle(mainHeader).marginLeft == '0px') {
                    mainHeader.style.marginLeft = "-256px";
                    mainHeader.style.overflow = 'unset';
                    mainHeader.style.height = '100%';
                    pageBody.style.overflow = 'auto';
                }
            }
        });

    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 1000 ) { topBtn.classList.add('show'); }
        else { topBtn.classList.remove('show');}
    }

    topBtn.addEventListener('click', function(event) {
        scrollToTop();
    });



function scrollToTop() {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
}



    // if(window.getComputedStyle(menuBtn).display === 'none'){
    //     mainHeader.classList.toggle("header_open");
    // }

    // menuBtn.addEventListener('click', function(event) {
    //     mainHeader.classList.toggle("header_open");
    // });
    // mainContent.addEventListener('click', function(event) {
    //     if(window.getComputedStyle(menuBtn).display != 'none'){
    //         if(mainHeader.classList.contains("header_open") && event.target != menuBtn) {
    //             mainHeader.classList.toggle("header_open");
    //         }
    //     }
    // });
})();