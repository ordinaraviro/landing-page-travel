const burgerBtn = document.querySelector('.header-burger');

burgerBtn.addEventListener('click', () => {
    const headerMenu = document.querySelector('.burger-menu');
    headerMenu.classList.toggle('hide');
})