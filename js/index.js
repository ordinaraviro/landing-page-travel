const headerSection = document.querySelector('.header-section');

function toggleBurgerMenu() {
    const headerMenu = document.querySelector('.burger-menu');
    console.log('toggleBurgerMenu called');
    headerMenu.classList.toggle('hide');
}

headerSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('header-burger') || event.target.classList.contains('burger-menu') || event.target.classList.contains('burger-close-btn') || event.target.closest('.header-burger') || event.target.closest('.burger-close-btn')) {
        toggleBurgerMenu();
    }
});  