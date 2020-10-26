(() => {
    const searchDesktop = document.getElementById('search-desktop');
    const searchMobile = document.getElementById('search-mobile');

    const burgerBtn = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const pagebody = document.querySelector('.page__body');

    burgerBtn.addEventListener('click', (event) =>{
        mobileMenu.classList.toggle('mobile-menu_active');
        burgerBtn.classList.toggle('burger_active');
        pagebody.classList.toggle('page__body_fixed')
    })

    pagebody.addEventListener("click", (event) =>{
        if (event.target.classList.contains('search-icon')){
            searchDesktop.classList.toggle('search__content_d-n');
            searchMobile.classList.toggle('search__content_d-n');
        }
        else{
            console.log(event);
            if(event.target.classList.contains('search__content') || event.target.classList.contains('search-input')){
                return null;
            }
            else{
                searchDesktop.classList.add('search__content_d-n');
                searchMobile.classList.add('search__content_d-n');
            }
        }
    })

})();