const menuOpener = document.querySelector('.menu-opener');

menuOpener.addEventListener('click', function() {
    const navMenu = document.querySelector('nav'); 

    if(navMenu.style.display === "none") {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
});