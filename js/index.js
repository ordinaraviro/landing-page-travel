const burgerBtn = document.querySelector('.header-burger');
const burgerBtnClose = document.querySelector('.burger-close-btn');
const burgerBg = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    const headerMenu = document.querySelector('.burger-menu');
    headerMenu.classList.toggle('hide');
})

burgerBtnClose.addEventListener('click', () => {
    const headerMenu = document.querySelector('.burger-menu');
    headerMenu.classList.toggle('hide');
})

burgerBg.addEventListener('click', () => {
    const headerMenu = document.querySelector('.burger-menu');
    headerMenu.classList.toggle('hide');
})