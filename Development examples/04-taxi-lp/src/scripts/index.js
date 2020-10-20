(() => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const pageBody = document.querySelector('.page__body');

    burger.onclick = () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        pageBody.classList.toggle('fixed');
    }

})();